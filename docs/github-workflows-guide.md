# GitHub Workflows & CI/CD Guide

This document provides comprehensive information about the GitHub Actions workflows configured for the BrainBytes project, including setup, configuration, and troubleshooting.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Workflow Files](#workflow-files)
3. [AWS OIDC Setup](#aws-oidc-setup)
4. [GitHub Secrets Configuration](#github-secrets-configuration)
5. [Deployment Workflow](#deployment-workflow)
6. [Test Workflow](#test-workflow)
7. [Status Check Workflow](#status-check-workflow)
8. [Troubleshooting](#troubleshooting)
9. [Best Practices](#best-practices)

## 🔄 Overview

The BrainBytes project uses GitHub Actions for continuous integration and deployment (CI/CD). The workflows are designed to:

- **Automatically test** code changes on every push and pull request
- **Deploy to production** when changes are pushed to the main branch
- **Ensure code quality** through linting, type checking, and testing
- **Provide status checks** for pull requests

## 📁 Workflow Files

The project contains three main workflow files in `.github/workflows/`:

### 1. `deploy.yml` - Production Deployment

- **Trigger**: Push to `main` branch, manual dispatch
- **Purpose**: Deploy the application to AWS production environment
- **Key Features**:
  - AWS OIDC authentication
  - SST deployment
  - Environment variable management

### 2. `test.yml` - Continuous Integration

- **Trigger**: Push to any branch, pull requests
- **Purpose**: Run tests, linting, and type checking
- **Key Features**:
  - Multi-package testing (app and core)
  - Code coverage reporting
  - Build verification

### 3. `status-check.yml` - Pull Request Checks

- **Trigger**: Pull requests
- **Purpose**: Provide quick status checks for PR reviews
- **Key Features**:
  - Fast feedback on code quality
  - Integration with GitHub's PR interface

## 🔐 AWS OIDC Setup

The deployment workflow uses OpenID Connect (OIDC) to securely authenticate with AWS without storing long-lived credentials.

### Prerequisites

1. **AWS Account** with appropriate permissions
2. **IAM OIDC Identity Provider** configured for GitHub Actions
3. **IAM Role** with deployment permissions

### Step-by-Step OIDC Configuration

#### 1. Create OIDC Identity Provider

In AWS Console → IAM → Identity providers:

```
Provider URL: https://token.actions.githubusercontent.com
Audience: sts.amazonaws.com
```

**Important**: Use the "Get thumbprint" button to automatically fetch the correct SSL certificate thumbprint.

#### 2. Create IAM Role

Create a role named `brainbytes-production-github` with this trust policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::852319270180:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:redentordev/brainbytes:*"
        }
      }
    }
  ]
}
```

**Key Points**:

- Replace `852319270180` with your AWS account ID
- Replace `redentordev/brainbytes` with your GitHub repository
- Use `StringLike` instead of `StringEquals` for flexibility
- The `*` wildcard allows any branch/trigger type

#### 3. Attach Permissions

Attach these AWS managed policies to the role:

- `PowerUserAccess` (for SST deployments)
- Or create custom policies with specific permissions for your resources

## 🔑 GitHub Secrets Configuration

Configure these secrets in your GitHub repository (Settings → Secrets and variables → Actions):

### Required Secrets

| Secret Name                     | Description                  | Example                                            |
| ------------------------------- | ---------------------------- | -------------------------------------------------- |
| `DATABASE_URL`                  | PostgreSQL connection string | `postgresql://user:pass@host:5432/db`              |
| `BETTER_AUTH_SECRET`            | Authentication secret key    | `random-32-char-string`                            |
| `GH_CLIENT_ID`                  | GitHub OAuth client ID       | `Ov23liDhTRvEmX0rx81u`                             |
| `GH_CLIENT_SECRET`              | GitHub OAuth client secret   | `your-github-oauth-client-secret`                  |
| `GOOGLE_CLIENT_ID`              | Google OAuth client ID       | `your-google-client-id.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET`          | Google OAuth client secret   | `GOCSPX-your-google-client-secret`                 |
| `OPENAI_API_KEY`                | OpenAI API key               | `sk-proj-your-openai-api-key`                      |
| `CLOUDFLARE_API_TOKEN`          | Cloudflare API token         | `your-cloudflare-api-token`                        |
| `CLOUDFLARE_DEFAULT_ACCOUNT_ID` | Cloudflare account ID        | `your-cloudflare-account-id`                       |

### Security Notes

- **Never commit secrets** to your repository
- Use GitHub's secret scanning protection
- Rotate secrets regularly
- Use environment-specific secrets for different stages

## 🚀 Deployment Workflow

The deployment workflow (`deploy.yml`) follows this sequence:

### 1. Environment Setup

```yaml
- Checkout code
- Setup Bun runtime
- Setup Node.js
- Install SST CLI
```

### 2. AWS Authentication

```yaml
- Configure AWS credentials using OIDC
- Assume IAM role
- Set AWS region (us-east-1)
```

### 3. Quality Checks

```yaml
- Install dependencies
- Run TypeScript type checking
- Run ESLint linting
- Execute test suite
```

### 4. Deployment

```yaml
- Install SST dependencies
- Deploy to production stage
- Update infrastructure as needed
```

### Workflow Configuration

```yaml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: ${{ github.ref }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
```

## 🧪 Test Workflow

The test workflow (`test.yml`) ensures code quality:

### Test Matrix

- **Frontend Tests**: Jest with React Testing Library
- **Backend Tests**: Vitest for API endpoints
- **Type Checking**: TypeScript compiler
- **Linting**: ESLint with Prettier

### Coverage Requirements

- Minimum 80% code coverage
- All tests must pass
- No linting errors allowed

## ✅ Status Check Workflow

Provides quick feedback for pull requests:

- **Fast execution** (< 2 minutes)
- **Essential checks only**
- **Clear pass/fail status**
- **Integration with GitHub PR interface**

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. OIDC Authentication Failures

**Error**: `Could not assume role with OIDC: Not authorized to perform sts:AssumeRoleWithWebIdentity`

**Solutions**:

- Verify OIDC provider exists with correct URL
- Check IAM role trust policy uses `StringLike` instead of `StringEquals`
- Ensure repository name matches exactly (case-sensitive)
- Add correct thumbprint to OIDC provider

#### 2. Build Failures

**Error**: `Module not found: Can't resolve '@ai-sdk/openai'`

**Solutions**:

- Check package.json dependencies
- Run `bun install` to update lockfile
- Verify all required packages are listed

#### 3. SST Link Errors

**Error**: `It does not look like SST links are active`

**Solutions**:

- Ensure SST secrets are properly configured
- Check environment variables are set
- Verify SST stage configuration

#### 4. Secret Scanning Blocks

**Error**: `Push cannot contain secrets`

**Solutions**:

- Remove secrets from git history: `git filter-branch`
- Add sensitive files to `.gitignore`
- Use GitHub secrets instead of committing credentials

### Debug Steps

1. **Check workflow logs** in GitHub Actions tab
2. **Verify secrets** are configured correctly
3. **Test locally** with same commands
4. **Review AWS CloudTrail** for permission issues
5. **Check SST logs** for deployment errors

## 📋 Best Practices

### Workflow Design

- **Keep workflows fast** (< 5 minutes for tests)
- **Use caching** for dependencies and build artifacts
- **Fail fast** on critical errors
- **Provide clear error messages**

### Security

- **Use OIDC** instead of long-lived AWS keys
- **Limit IAM permissions** to minimum required
- **Rotate secrets** regularly
- **Monitor for secret leaks**

### Maintenance

- **Update actions** to latest versions regularly
- **Review workflow performance** monthly
- **Document changes** in this guide
- **Test workflow changes** in feature branches

### Monitoring

- **Set up notifications** for workflow failures
- **Monitor deployment success rates**
- **Track build times** and optimize as needed
- **Review security alerts** promptly

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AWS OIDC with GitHub Actions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html)
- [SST Documentation](https://docs.sst.dev/)
- [BrainBytes Testing Guide](./testing-guide.md)

---

**Last Updated**: January 2025  
**Maintained By**: BrainBytes DevOps Team

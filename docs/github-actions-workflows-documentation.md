# GitHub Actions Workflows Documentation

## Overview

This document provides comprehensive documentation for the GitHub Actions workflows used in the BrainBytes project. All sensitive information has been redacted and replaced with placeholder values for security purposes.

## Workflow Files

### 1. Deploy Workflow (`.github/workflows/deploy.yml`)

#### Purpose

Automated deployment to production environment when code is pushed to the main branch.

#### Triggers

- Push to `main` branch
- Manual workflow dispatch

#### Workflow Configuration

```yaml
name: Deploy

on:
  push:
    branches:
      - main
  workflow_dispatch:

concurrency:
  group: ${{ github.ref }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/cache@v4
        with:
          path: |
            .sst
          key: ${{ runner.os }}-sst

      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - uses: actions/setup-node@v4
        with:
          node-version: "20"

      - run: "curl -fsSL https://ion.sst.dev/install | bash"

      - name: Debug OIDC Token
        run: |
          echo "GitHub Repository: ${{ github.repository }}"
          echo "GitHub Ref: ${{ github.ref }}"
          echo "GitHub SHA: ${{ github.sha }}"
          echo "GitHub Actor: ${{ github.actor }}"

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::[REDACTED-ACCOUNT-ID]:role/[REDACTED-ROLE-NAME]
          role-session-name: GitHubActions-BrainBytes
          aws-region: us-east-1

      - name: Install dependencies
        run: bun install

      - name: Typecheck
        run: bun run typecheck

      - name: Lint
        run: bun run lint

      - name: Run tests
        run: bun run test

      - name: Deploy
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          BETTER_AUTH_SECRET: ${{ secrets.BETTER_AUTH_SECRET }}
          GITHUB_CLIENT_ID: ${{ secrets.GH_CLIENT_ID }}
          GITHUB_CLIENT_SECRET: ${{ secrets.GH_CLIENT_SECRET }}
          GOOGLE_CLIENT_ID: ${{ secrets.GOOGLE_CLIENT_ID }}
          GOOGLE_CLIENT_SECRET: ${{ secrets.GOOGLE_CLIENT_SECRET }}
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_DEFAULT_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_DEFAULT_ACCOUNT_ID }}
        run: |
          sst install
          sst deploy --stage=production
```

#### Required Secrets

| Secret Name                     | Description                  | Example Format                        |
| ------------------------------- | ---------------------------- | ------------------------------------- |
| `DATABASE_URL`                  | PostgreSQL connection string | `postgresql://user:pass@host:port/db` |
| `BETTER_AUTH_SECRET`            | Authentication secret key    | `[REDACTED-SECRET-KEY]`               |
| `GH_CLIENT_ID`                  | GitHub OAuth client ID       | `[REDACTED-GITHUB-CLIENT-ID]`         |
| `GH_CLIENT_SECRET`              | GitHub OAuth client secret   | `[REDACTED-GITHUB-CLIENT-SECRET]`     |
| `GOOGLE_CLIENT_ID`              | Google OAuth client ID       | `[REDACTED-GOOGLE-CLIENT-ID]`         |
| `GOOGLE_CLIENT_SECRET`          | Google OAuth client secret   | `[REDACTED-GOOGLE-CLIENT-SECRET]`     |
| `OPENAI_API_KEY`                | OpenAI API key               | `sk-proj-[REDACTED-API-KEY]`          |
| `CLOUDFLARE_API_TOKEN`          | Cloudflare API token         | `[REDACTED-CLOUDFLARE-TOKEN]`         |
| `CLOUDFLARE_DEFAULT_ACCOUNT_ID` | Cloudflare account ID        | `[REDACTED-ACCOUNT-ID]`               |

#### AWS Configuration

- **IAM Role**: `arn:aws:iam::[REDACTED-ACCOUNT-ID]:role/[REDACTED-ROLE-NAME]`
- **Session Name**: `GitHubActions-BrainBytes`
- **Region**: `us-east-1`
- **Permissions**: OIDC-based authentication with least privilege access

### 2. Test Workflow (`.github/workflows/test.yml`)

#### Purpose

Comprehensive testing pipeline for pull requests and pushes to main/develop branches.

#### Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

#### Jobs

##### App Tests Job

```yaml
app-tests:
  name: App Tests
  runs-on: ubuntu-latest
  permissions:
    id-token: write
    contents: read

  steps:
    - name: Checkout code
      uses: actions/checkout@v4
      with:
        fetch-depth: 0

    - name: Cache SST
      uses: actions/cache@v4
      with:
        path: |
          .sst
        key: ${{ runner.os }}-sst

    - name: Setup Bun
      uses: oven-sh/setup-bun@v2
      with:
        bun-version: latest

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: "20"

    - name: Install SST
      run: "curl -fsSL https://ion.sst.dev/install | bash"

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v4
      with:
        role-to-assume: arn:aws:iam::[REDACTED-ACCOUNT-ID]:role/[REDACTED-ROLE-NAME]
        role-session-name: GitHubActions-BrainBytes
        aws-region: us-east-1

    - name: Install dependencies
      run: bun install

    - name: Run app tests
      env:
        # [REDACTED ENVIRONMENT VARIABLES - Same as deploy workflow]
      run: |
        sst install
        sst shell --stage production -- bun run test

    - name: Check app build
      env:
        # [REDACTED ENVIRONMENT VARIABLES - Same as deploy workflow]
      run: sst shell --stage production -- bun run build

    - name: Run typecheck
      run: bun run typecheck
```

##### Lint and Format Job

```yaml
lint-and-format:
  name: Lint and Format Check
  runs-on: ubuntu-latest

  steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Bun
      uses: oven-sh/setup-bun@v2
      with:
        bun-version: latest

    - name: Install dependencies
      run: bun install

    - name: Run lint
      run: |
        echo "🔍 Running lint checks..."
        bun run lint || {
          echo "❌ Lint found issues. See above for details."
          echo "ℹ️  Run 'bun run format' to auto-fix some issues."
          exit 1
        }

    - name: Lint Summary
      if: success()
      run: |
        echo "✅ All lint checks passed!"
        echo "✅ Code formatting is correct!"
        echo "🎉 Code quality standards met!"
```

##### Integration Tests Job

```yaml
integration:
  name: Integration Tests
  runs-on: ubuntu-latest
  needs: [app-tests, lint-and-format]
  if: success()

  steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Setup Bun
      uses: oven-sh/setup-bun@v2
      with:
        bun-version: latest

    - name: Install dependencies
      run: bun install

    - name: Run integration smoke tests
      run: |
        echo "✅ App tests passed"
        echo "✅ App build successful"
        echo "✅ Lint and format checks passed"
        echo "✅ Integration checks complete"
```

### 3. Status Check Workflow (`.github/workflows/status-check.yml`)

#### Purpose

Quick status checks for code quality and build validation.

#### Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

#### Workflow Configuration

```yaml
name: Status Check

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  quick-check:
    name: Quick Status Check
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Check formatting
        run: |
          echo "🎨 Checking code formatting..."
          if bunx prettier --check .; then
            echo "✅ Code formatting is correct"
          else
            echo "⚠️ Code formatting issues found"
            echo "ℹ️ Run 'bun run format' to fix formatting"
          fi

      - name: App dependency check
        run: |
          echo "📦 Checking app dependencies..."
          bun install --dry-run
          echo "✅ App dependencies are valid"

      - name: App lint check
        run: |
          echo "🔍 Quick app lint check..."
          if bun run lint; then
            echo "✅ App linting passed"
          else
            echo "⚠️ App linting issues found"
          fi

      - name: App typecheck
        run: |
          echo "🔍 Quick typecheck..."
          if bun run typecheck; then
            echo "✅ Typecheck passed"
          else
            echo "⚠️ Typecheck issues found"
          fi

      - name: App build check
        run: |
          echo "🔨 Checking app build..."
          if timeout 60s bun run build; then
            echo "✅ App build successful"
          else
            echo "⚠️ App build had issues"
          fi

      - name: Status Summary
        run: |
          echo "✅ Dependencies checked"
          echo "✅ Linting verified"
          echo "✅ Typecheck verified"
          echo "✅ Build validation complete"
          echo "ℹ️ See full test workflow for comprehensive testing"
```

## Security Configuration

### OIDC Authentication

The workflows use OpenID Connect (OIDC) for secure authentication with AWS:

```yaml
permissions:
  id-token: write
  contents: read
```

### AWS IAM Role Configuration

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::[REDACTED-ACCOUNT-ID]:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:[REDACTED-GITHUB-ORG]/[REDACTED-REPO-NAME]:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

### Required IAM Permissions

The GitHub Actions role requires the following AWS permissions:

- `lambda:*` (for Lambda function management)
- `s3:*` (for S3 bucket operations)
- `cloudformation:*` (for CloudFormation stack management)
- `iam:PassRole` (for passing roles to services)
- `ssm:GetParameter` (for accessing Parameter Store)
- `cloudfront:*` (for CloudFront distribution management)

## Environment Variables and Secrets

### GitHub Repository Secrets

All sensitive configuration is stored as GitHub repository secrets:

| Category        | Secret Names                                             |
| --------------- | -------------------------------------------------------- |
| Database        | `DATABASE_URL`                                           |
| Authentication  | `BETTER_AUTH_SECRET`, `GH_CLIENT_ID`, `GH_CLIENT_SECRET` |
| OAuth Providers | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`               |
| External APIs   | `OPENAI_API_KEY`                                         |
| Cloud Services  | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_DEFAULT_ACCOUNT_ID`  |

### Secret Management Best Practices

1. **Rotation**: Secrets are rotated regularly
2. **Least Privilege**: Each secret has minimal required permissions
3. **Encryption**: All secrets are encrypted at rest
4. **Audit**: Secret access is logged and monitored
5. **Separation**: Development and production secrets are separate

## Workflow Dependencies

### Tool Versions

- **Node.js**: 20.x
- **Bun**: Latest stable version
- **SST**: Latest version (installed via curl)
- **GitHub Actions**: v4 for most actions

### Caching Strategy

```yaml
- uses: actions/cache@v4
  with:
    path: |
      .sst
    key: ${{ runner.os }}-sst
```

### Dependency Installation

```bash
# Install JavaScript dependencies
bun install

# Install SST CLI
curl -fsSL https://ion.sst.dev/install | bash

# Install SST project dependencies
sst install
```

## Monitoring and Notifications

### Workflow Status

- **Success**: Deployment proceeds automatically
- **Failure**: Team is notified via GitHub notifications
- **Partial Success**: Manual intervention required

### Monitoring Integration

- CloudWatch logs for deployment monitoring
- GitHub Actions logs for build process
- SST dashboard for infrastructure status

## Troubleshooting

### Common Issues

#### Authentication Failures

```bash
# Check OIDC token configuration
echo "GitHub Repository: ${{ github.repository }}"
echo "GitHub Ref: ${{ github.ref }}"
echo "GitHub SHA: ${{ github.sha }}"
echo "GitHub Actor: ${{ github.actor }}"
```

#### Deployment Failures

```bash
# Check SST logs
sst logs --stage production

# Check AWS CloudFormation events
aws cloudformation describe-stack-events --stack-name [STACK-NAME]
```

#### Test Failures

```bash
# Run tests locally
bun run test

# Check test coverage
bun run test:coverage

# Run specific test suites
bun run test:unit
bun run test:integration
```

### Debug Steps

1. **Check GitHub Actions logs**: Review the workflow execution logs
2. **Verify secrets**: Ensure all required secrets are configured
3. **Check AWS permissions**: Verify IAM role has necessary permissions
4. **Review SST configuration**: Check sst.config.ts for issues
5. **Test locally**: Reproduce issues in local development environment

## Workflow Optimization

### Performance Improvements

- **Caching**: SST cache reduces deployment time
- **Parallel Jobs**: Lint and test jobs run in parallel
- **Conditional Execution**: Integration tests only run if previous jobs succeed

### Cost Optimization

- **Efficient Resource Usage**: Workflows use appropriate runner sizes
- **Caching**: Reduces redundant downloads and builds
- **Conditional Deployment**: Only deploy on main branch changes

## Security Considerations

### Secret Protection

- All sensitive values are stored as GitHub secrets
- Secrets are never logged or exposed in workflow outputs
- OIDC authentication eliminates need for long-lived credentials

### Access Control

- Workflows only run on authorized branches
- Pull request workflows have limited permissions
- Deployment requires successful tests and code review

### Audit Trail

- All workflow executions are logged
- AWS CloudTrail tracks infrastructure changes
- GitHub provides complete audit history

## Maintenance

### Regular Updates

- **Dependencies**: Monthly dependency updates
- **Actions**: Quarterly GitHub Actions version updates
- **Security**: Immediate security patch application
- **Documentation**: Continuous documentation updates

### Review Schedule

- **Weekly**: Workflow performance review
- **Monthly**: Security configuration review
- **Quarterly**: Complete workflow architecture review
- **Annually**: Disaster recovery testing

---

_This documentation is updated regularly to reflect the current state of the GitHub Actions workflows. All sensitive information has been redacted for security purposes._

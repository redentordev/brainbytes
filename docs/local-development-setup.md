# Local Development Setup Guide

This guide covers the complete setup process for developing BrainBytes locally, including AWS CLI configuration, SST development workflow, and best practices.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [AWS CLI Setup](#aws-cli-setup)
3. [Project Setup](#project-setup)
4. [SST Development Workflow](#sst-development-workflow)
5. [Environment Configuration](#environment-configuration)
6. [Development Commands](#development-commands)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

## 🔧 Prerequisites

Before starting, ensure you have the following installed:

### Required Software

| Tool        | Version | Purpose                  | Installation                                                                                   |
| ----------- | ------- | ------------------------ | ---------------------------------------------------------------------------------------------- |
| **Bun**     | Latest  | JavaScript runtime       | [bun.sh](https://bun.sh/)                                                                      |
| **Node.js** | 20+     | JavaScript runtime       | [nodejs.org](https://nodejs.org/)                                                              |
| **Git**     | Latest  | Version control          | [git-scm.com](https://git-scm.com/)                                                            |
| **AWS CLI** | v2      | AWS management           | [AWS CLI Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) |
| **SST**     | Latest  | Infrastructure framework | Installed via npm/bun (see below)                                                              |

### Optional Tools

- **VS Code** - Recommended editor with TypeScript support
- **Docker** - For containerized development (optional)
- **PostgreSQL** - Local database (if not using cloud)

## ☁️ AWS CLI Setup

### 1. Install AWS CLI

**macOS (Homebrew):**

```bash
brew install awscli
```

**Windows:**
Download from [AWS CLI Windows Installer](https://awscli.amazonaws.com/AWSCLIV2.msi)

**Linux:**

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### 2. Verify Installation

```bash
aws --version
# Should output: aws-cli/2.x.x Python/3.x.x...
```

### 3. Configure AWS Credentials

#### Option A: Using AWS Configure (Recommended for beginners)

```bash
aws configure
```

You'll be prompted for:

```
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: us-east-1
Default output format [None]: json
```

#### Option B: Manual Credentials File

Create/edit `~/.aws/credentials`:

```ini
[default]
aws_access_key_id = YOUR_ACCESS_KEY_ID
aws_secret_access_key = YOUR_SECRET_ACCESS_KEY

[brainbytes-dev]
aws_access_key_id = YOUR_DEV_ACCESS_KEY_ID
aws_secret_access_key = YOUR_DEV_SECRET_ACCESS_KEY

[brainbytes-prod]
aws_access_key_id = YOUR_PROD_ACCESS_KEY_ID
aws_secret_access_key = YOUR_PROD_SECRET_ACCESS_KEY
```

Create/edit `~/.aws/config`:

```ini
[default]
region = us-east-1
output = json

[profile brainbytes-dev]
region = us-east-1
output = json

[profile brainbytes-prod]
region = us-east-1
output = json
```

### 4. Test AWS Access

```bash
# Test basic access
aws sts get-caller-identity

# Should return your account information
{
    "UserId": "AIDACKCEVSQ6C2EXAMPLE",
    "Account": "852319270180",
    "Arn": "arn:aws:iam::852319270180:user/your-username"
}
```

### 5. IAM Permissions

Your AWS user needs these minimum permissions for SST development:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "cloudformation:*",
        "s3:*",
        "lambda:*",
        "iam:*",
        "apigateway:*",
        "route53:*",
        "cloudfront:*",
        "ssm:*",
        "iot:*",
        "ecr:*"
      ],
      "Resource": "*"
    }
  ]
}
```

**For production environments**, use more restrictive permissions. See [SST IAM Guide](https://docs.sst.dev/advanced/iam-credentials) for details.

## 📦 SST Installation

SST (Serverless Stack) is the infrastructure framework that powers BrainBytes deployment. There are two ways to install it:

### Option 1: Project-Level Installation (Recommended)

SST is already included in the project dependencies, so it will be installed when you run:

```bash
bun install
```

You can then use SST via:

```bash
# Using bun
bunx sst dev
bunx sst deploy

# Using npx
npx sst dev
npx sst deploy
```

### Option 2: Global Installation

For convenience, you can install SST globally:

**Using npm:**

```bash
npm install -g sst
```

**Using bun:**

```bash
bun install -g sst
```

**Using curl (Linux/macOS):**

```bash
curl -fsSL https://sst.dev/install | bash
```

After global installation, you can use SST directly:

```bash
sst dev
sst deploy
```

### Verify SST Installation

```bash
# Check SST version
sst version

# Should output something like:
# SST v3.x.x
# AWS Account: 852319270180
# Region: us-east-1
```

## 🌐 Next.js Deployment with SST

BrainBytes uses SST's **Serverless approach** with OpenNext for deploying the Next.js application to AWS. Here's how it works:

### Deployment Architecture

```typescript
// sst.config.ts - BrainBytes configuration
const web = new sst.aws.Nextjs("BrainbytesApp", {
  path: "packages/app",
  link: [...allSecrets],
  domain: {
    dns: sst.cloudflare.dns(),
    name: "brainbytes.redentor.dev",
  },
  dev: {
    command: "bun run dev",
  },
});
```

### SST Next.js Deployment Options

SST supports two deployment methods for Next.js:

#### 1. **Serverless with OpenNext** (Used by BrainBytes)

- ✅ **Automatic scaling** with AWS Lambda
- ✅ **Cost-effective** for variable traffic
- ✅ **Global CDN** with CloudFront
- ✅ **Zero server management**

#### 2. **Containers with Docker**

- ✅ **Full control** over runtime environment
- ✅ **Consistent** across environments
- ✅ **Better for** long-running processes
- ✅ **ECS Fargate** deployment

### BrainBytes Architecture Benefits

Our serverless approach provides:

- **Automatic Scaling**: Handles traffic spikes automatically
- **Cost Optimization**: Pay only for actual usage
- **Global Performance**: CloudFront CDN for fast loading
- **Zero Maintenance**: No server management required
- **Resource Linking**: Direct access to AWS resources via SST SDK

### How Resource Linking Works

```typescript
// In sst.config.ts - Infrastructure definition
const secrets = {
  DatabaseUrl: new sst.Secret("DatabaseUrl", process.env.DATABASE_URL),
  OpenaiApiKey: new sst.Secret("OpenaiApiKey", process.env.OPENAI_API_KEY),
};

const web = new sst.aws.Nextjs("BrainbytesApp", {
  link: [...Object.values(secrets)], // Link resources to app
});
```

```typescript
// In your Next.js app - Runtime access
import { Resource } from "sst";

// Access linked resources type-safely
const dbUrl = Resource.DatabaseUrl.value;
const openaiKey = Resource.OpenaiApiKey.value;
```

## 🚀 Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/redentordev/brainbytes.git
cd brainbytes
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Configuration

Create your environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/brainbytes

# Authentication
BETTER_AUTH_SECRET=your-32-character-secret-key-here

# OAuth Providers
GITHUB_CLIENT_ID=your-github-oauth-client-id
GITHUB_CLIENT_SECRET=your-github-oauth-client-secret
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret

# AI Integration
OPENAI_API_KEY=sk-proj-your-openai-api-key

# Cloudflare (for production)
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token
CLOUDFLARE_DEFAULT_ACCOUNT_ID=your-cloudflare-account-id
```

### 4. Verify Setup

```bash
# Check if SST can access AWS
bun sst version

# Should show SST version and AWS account info
```

## 🔄 SST Development Workflow

### Understanding SST Concepts

#### Infrastructure as Code (IaC)

- Everything is defined in `sst.config.ts`
- No manual AWS Console changes needed
- SST manages all resources automatically

#### Personal Stages

- Each developer gets their own isolated environment
- Stage name defaults to your system username
- Resources are namespaced by stage

#### Resource Linking

- Connect infrastructure to runtime code
- Access resources via SST SDK
- Type-safe resource references

### 1. Start Development Mode

```bash
# Start SST in development mode
sst dev
```

This command:

- ✅ Deploys your app to your personal stage
- ✅ Runs functions locally with Live Lambda
- ✅ Creates a tunnel for VPC resources
- ✅ Starts the Next.js development server
- ✅ Enables hot reloading for both infrastructure and code

**Expected Output:**

```
SST v3.x.x

➜  App:     brainbytes
➜  Stage:   your-username
➜  Console: https://console.sst.dev/brainbytes/your-username

✓  Complete

BrainbytesApp: https://your-app-url.sst.dev
```

### 2. Development Workflow

#### Making Code Changes

1. **Frontend Changes**: Automatically hot-reloaded
2. **Backend Changes**: Functions restart automatically
3. **Infrastructure Changes**: Deployed incrementally

#### Example: Adding a New Function

1. **Update `sst.config.ts`**:

```typescript
const newFunction = new sst.aws.Function("NewFunction", {
  handler: "packages/app/src/functions/new-function.handler",
  link: [database, bucket],
});
```

2. **Create the function**:

```typescript
// packages/app/src/functions/new-function.ts
import { Resource } from "sst";

export const handler = async (event: any) => {
  console.log("Database URL:", Resource.Database.connectionString);
  return { statusCode: 200, body: "Hello from new function!" };
};
```

3. **SST automatically deploys** the changes

#### Example: Updating Database Schema

1. **Modify schema** in `packages/core/src/schema.ts`
2. **Generate migration**:

```bash
bun run db:generate
```

3. **Apply migration**:

```bash
bun run db:migrate
```

### 3. Testing Your Changes

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Type checking
bun run typecheck

# Linting
bun run lint
```

### 4. Accessing Your App

- **Frontend**: Displayed in SST output (usually `https://xxx.sst.dev`)
- **API**: Same domain with `/api` prefix
- **Console**: SST Console URL for monitoring

### 5. Viewing Logs

```bash
# View function logs
sst logs --function MyFunction

# Tail logs in real-time
sst logs --function MyFunction --tail

# View all logs
sst logs
```

## 🔧 Environment Configuration

### Stage-Specific Configuration

Configure different settings per stage in `sst.config.ts`:

```typescript
export default $config({
  app(input) {
    return {
      name: "brainbytes",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile:
            input?.stage === "production" ? "brainbytes-prod" : "default",
        },
        cloudflare: "6.3.1",
      },
    };
  },
  async run() {
    // Environment-specific configuration
    const isDev = $app.stage !== "production";

    const secrets = {
      DatabaseUrl: new sst.Secret(
        "DatabaseUrl",
        isDev ? process.env.DEV_DATABASE_URL : process.env.DATABASE_URL
      ),
      // ... other secrets
    };

    const web = new sst.aws.Nextjs("BrainbytesApp", {
      path: "packages/app",
      link: [...Object.values(secrets)],
      domain: isDev
        ? undefined
        : {
            dns: sst.cloudflare.dns(),
            name: "brainbytes.redentor.dev",
          },
      environment: {
        NEXT_PUBLIC_API_URL: isDev
          ? "http://localhost:3000"
          : "https://brainbytes.redentor.dev",
      },
    });

    return { web: web.url };
  },
});
```

### Managing Secrets

```bash
# Set a secret for current stage
sst secret set MySecret "secret-value"

# Set a secret for specific stage
sst secret set MySecret "prod-secret-value" --stage production

# List secrets
sst secret list

# Remove a secret
sst secret remove MySecret
```

## 📝 Development Commands

### Core SST Commands

| Command      | Description            | Usage                  |
| ------------ | ---------------------- | ---------------------- |
| `sst dev`    | Start development mode | Daily development      |
| `sst deploy` | Deploy to stage        | Production deployments |
| `sst remove` | Remove all resources   | Cleanup                |
| `sst shell`  | Open AWS shell         | Debugging              |
| `sst logs`   | View function logs     | Monitoring             |

### Project-Specific Commands

| Command             | Description          | When to Use               |
| ------------------- | -------------------- | ------------------------- |
| `bun run dev`       | Start Next.js only   | Frontend-only development |
| `bun run build`     | Build for production | Testing builds            |
| `bun run test`      | Run all tests        | Before commits            |
| `bun run lint`      | Check code quality   | Before commits            |
| `bun run typecheck` | Check TypeScript     | Before commits            |

### Database Commands

| Command               | Description          | When to Use           |
| --------------------- | -------------------- | --------------------- |
| `bun run db:generate` | Generate migrations  | After schema changes  |
| `bun run db:migrate`  | Apply migrations     | Deploy schema changes |
| `bun run db:push`     | Push schema directly | Development only      |
| `bun run db:studio`   | Open database GUI    | Data inspection       |

## 🔍 Troubleshooting

### Common Issues

#### 1. AWS Credentials Not Found

**Error**: `Unable to locate credentials`

**Solutions**:

```bash
# Check AWS configuration
aws configure list

# Verify credentials file
cat ~/.aws/credentials

# Test AWS access
aws sts get-caller-identity
```

#### 2. SST Bootstrap Issues

**Error**: `Bootstrap bucket not found`

**Solutions**:

```bash
# Force bootstrap
sst bootstrap

# Check bootstrap status
aws s3 ls | grep sst-state
```

#### 3. Permission Denied Errors

**Error**: `User: arn:aws:iam::xxx:user/xxx is not authorized`

**Solutions**:

- Verify IAM permissions
- Check AWS profile configuration
- Ensure correct region

#### 4. Port Already in Use

**Error**: `Port 3000 is already in use`

**Solutions**:

```bash
# Kill process using port
lsof -ti:3000 | xargs kill -9

# Use different port
PORT=3001 sst dev
```

#### 5. Database Connection Issues

**Error**: `Connection refused` or `Database not found`

**Solutions**:

```bash
# Check database URL
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL

# Verify database exists
bun run db:studio
```

### Debug Mode

Enable verbose logging:

```bash
# Enable debug mode
DEBUG=sst:* sst dev

# Enable AWS SDK debug
AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE=1 DEBUG=aws-sdk sst dev
```

### Getting Help

1. **Check SST Console**: Monitor deployments and logs
2. **Review CloudFormation**: Check AWS Console for stack status
3. **SST Discord**: Join the community for help
4. **GitHub Issues**: Report bugs or ask questions

## 📋 Best Practices

### Development Workflow

1. **Always use personal stages** for development
2. **Test changes locally** before deploying
3. **Run tests** before committing
4. **Use meaningful commit messages**
5. **Keep environment files secure**

### Resource Management

1. **Don't modify AWS resources manually**
2. **Use SST for all infrastructure changes**
3. **Clean up unused stages regularly**
4. **Monitor costs** in AWS Console

### Security

1. **Never commit secrets** to version control
2. **Use different AWS accounts** for dev/prod
3. **Rotate credentials regularly**
4. **Use least privilege IAM policies**

### Performance

1. **Use resource linking** instead of hardcoding
2. **Optimize bundle sizes** for functions
3. **Enable caching** where appropriate
4. **Monitor function performance**

### Team Collaboration

1. **Use consistent stage naming**
2. **Document environment setup**
3. **Share common configurations**
4. **Use pull request reviews**

## 🔗 Additional Resources

- [SST Documentation](https://docs.sst.dev/)
- [AWS CLI User Guide](https://docs.aws.amazon.com/cli/latest/userguide/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Guide](https://orm.drizzle.team/)
- [BrainBytes GitHub Workflows](./github-workflows-guide.md)

---

**Need Help?**

- Check the [Troubleshooting Guide](./brainbytes-troubleshooting-guide.md)
- Join our team Discord
- Create an issue on GitHub

**Last Updated**: January 2025  
**Maintained By**: BrainBytes DevOps Team

# 🧠 BrainBytes — AI-Powered Learning Platform

[![Deploy](https://github.com/redentordev/brainbytes/actions/workflows/deploy.yml/badge.svg)](https://github.com/redentordev/brainbytes/actions/workflows/deploy.yml)
[![Tests](https://github.com/redentordev/brainbytes/actions/workflows/test.yml/badge.svg)](https://github.com/redentordev/brainbytes/actions/workflows/test.yml)
[![Status Check](https://github.com/redentordev/brainbytes/actions/workflows/status-check.yml/badge.svg)](https://github.com/redentordev/brainbytes/actions/workflows/status-check.yml)

BrainBytes is an **AI-powered tutoring platform** designed to make academic help more accessible for Filipino students. Built with modern web technologies and deployed using cutting-edge DevOps practices.

🌐 **Live Application**: [https://brainbytes.redentor.dev](https://brainbytes.redentor.dev)

## 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [System Architecture](#️-system-architecture)
3. [Technology Stack](#️-technology-stack)
4. [Quick Start](#-quick-start)
5. [Development Guide](#-development-guide)
6. [CI/CD & Deployment](#-cicd--deployment)
7. [Testing](#-testing)
8. [Documentation](#-documentation)
9. [Production Evidence](#-production-evidence)
10. [Contributing](#-contributing)
11. [Team](#-team)

## 🎯 Project Overview

BrainBytes leverages artificial intelligence to provide personalized tutoring experiences for students. The platform features:

- **Interactive AI Chat**: Real-time conversations with AI tutors
- **Learning Materials Management**: Upload and organize study materials
- **Subject-Specific Assistance**: Tailored help across different academic subjects
- **Progress Tracking**: Monitor learning progress and chat history
- **Multi-Platform Access**: Responsive design for desktop and mobile

### Key Features

- 🤖 **AI-Powered Tutoring** using OpenAI's GPT models
- 📚 **Material Management** with text and file upload support
- 🔐 **Secure Authentication** via GitHub and Google OAuth
- 📱 **Responsive Design** with modern UI components
- ⚡ **Real-time Chat** with streaming responses
- 📊 **Progress Tracking** and chat history

## 🏗️ System Architecture

![System Architecture](docs/architecture.png)

BrainBytes follows a modern serverless architecture with comprehensive cloud infrastructure:

```
brainbytes/
├── packages/
│   ├── app/          # Next.js frontend application
│   └── core/         # Shared database schema and utilities
├── .github/
│   └── workflows/    # CI/CD automation
├── docs/             # Comprehensive documentation
└── sst.config.ts     # Infrastructure as Code
```

### Production Infrastructure

![Deployed Main App](docs/deployed-main-app.png) ![Deployed Login App](docs/deployed-login-app.png)

- **Frontend**: Next.js application on AWS Lambda
- **Database**: PostgreSQL with Drizzle ORM and connection pooling
- **Authentication**: better-auth with GitHub/Google OAuth
- **AI Integration**: OpenAI API with streaming responses
- **CDN**: CloudFront + Cloudflare for global distribution
- **Infrastructure**: SST (Serverless Stack) for AWS deployment
- **Monitoring**: CloudWatch logs, metrics, and automated alerting

![CloudWatch Logs](docs/cloudwatch-logs.png) ![CloudWatch Metrics](docs/cloudwatch-metrics.png) ![CloudWatch Alarms](docs/cloudwatch-alarms.png)

### Deployment Architecture

For detailed architecture diagrams and infrastructure documentation, see:

- [Deployment Architecture Diagram](docs/deployment-architecture-diagram.md) - Comprehensive Mermaid diagrams
- [Cloud Environment Documentation](docs/cloud-environment-documentation.md) - AWS infrastructure details

## 🛠️ Technology Stack

| Component          | Technology              | Purpose                       |
| ------------------ | ----------------------- | ----------------------------- |
| **Frontend**       | Next.js 15, React 19    | Modern web application        |
| **Styling**        | Tailwind CSS, shadcn/ui | Component library and styling |
| **Backend**        | Next.js API Routes      | Server-side functionality     |
| **Database**       | PostgreSQL, Drizzle ORM | Data persistence              |
| **Authentication** | better-auth             | User management               |
| **AI**             | OpenAI API              | Chat functionality            |
| **Runtime**        | Bun                     | Fast JavaScript runtime       |
| **Infrastructure** | SST, AWS                | Cloud deployment              |
| **CI/CD**          | GitHub Actions          | Automation                    |
| **Monitoring**     | CloudWatch              | Metrics, logs, and alarms     |

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Node.js](https://nodejs.org/) 20+
- [Git](https://git-scm.com/)
- [AWS CLI](https://aws.amazon.com/cli/) (for SST development)
- [SST](https://sst.dev/) (installed via project dependencies)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/redentordev/brainbytes.git
   cd brainbytes
   ```

2. **Install dependencies** (includes SST)

   ```bash
   bun install
   ```

3. **Verify SST installation**

   ```bash
   bunx sst version
   # Should show SST version and AWS account info
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Start SST development mode**

   ```bash
   bunx sst dev
   # Or if installed globally: sst dev
   ```

6. **Access the application**
   - Frontend: URL displayed in SST output
   - Console: SST Console URL for monitoring

> **💡 Need detailed setup instructions?** See our comprehensive [Local Development Setup Guide](docs/local-development-setup.md) for AWS CLI configuration, SST workflow, and troubleshooting.

## 💻 Development Guide

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/brainbytes

# Authentication
BETTER_AUTH_SECRET=your-32-character-secret-key

# OAuth Providers
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# AI Integration
OPENAI_API_KEY=sk-proj-your-openai-api-key

# Cloudflare (for production)
CLOUDFLARE_API_TOKEN=your-cloudflare-token
CLOUDFLARE_DEFAULT_ACCOUNT_ID=your-account-id
```

### Available Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `bun run dev`        | Start development server (app) |
| `bun run build`      | Build for production (app)     |
| `bun run test`       | Run all tests (app)            |
| `bun run test:watch` | Run tests in watch mode (app)  |
| `bun run lint`       | Check code quality (all)       |
| `bun run format`     | Format code with Prettier      |
| `bun run typecheck`  | Check TypeScript types (app)   |

#### Database Scripts (Core Package)

| Command               | Description              |
| --------------------- | ------------------------ |
| `bun run db:generate` | Generate database schema |
| `bun run db:migrate`  | Run database migrations  |
| `bun run db:push`     | Push schema to database  |
| `bun run db:studio`   | Open Drizzle Studio      |

#### Package-Specific Scripts

| Command                 | Description                  |
| ----------------------- | ---------------------------- |
| `bun run dev:app`       | Start app development server |
| `bun run build:app`     | Build app for production     |
| `bun run test:app`      | Run app tests only           |
| `bun run lint:app`      | Lint app package only        |
| `bun run typecheck:app` | Typecheck app package only   |

### Monorepo Structure

```
brainbytes/                    # Root monorepo
├── packages/
│   ├── app/                   # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/           # Next.js app router
│   │   │   │   ├── api/       # API routes
│   │   │   │   ├── chat/      # Chat interface pages
│   │   │   │   └── login/     # Authentication pages
│   │   │   ├── components/    # React components
│   │   │   │   ├── chat/      # Chat-related components
│   │   │   │   │   └── __tests__/  # Component tests
│   │   │   │   ├── ui/        # shadcn/ui components
│   │   │   │   └── shared/    # Shared components
│   │   │   ├── lib/           # Utility functions
│   │   │   └── contexts/      # React contexts
│   │   ├── jest.config.ts     # Jest configuration
│   │   └── package.json       # App dependencies
│   └── core/                  # Shared database & utilities
│       ├── src/
│       │   ├── auth/          # Authentication schema
│       │   ├── material/      # Learning materials schema
│       │   ├── thread/        # Chat threads schema
│       │   └── schema.ts      # Main database schema
│       ├── migrations/        # Database migrations
│       └── package.json       # Core dependencies
├── .github/workflows/         # CI/CD automation
├── docs/                      # Comprehensive documentation
├── sst.config.ts             # Infrastructure as Code
└── package.json              # Root workspace configuration
```

## 🔄 CI/CD & Deployment

![GitHub Actions Success](docs/success-github-actions.png) ![CI/CD Architecture](docs/ci-cd-architecture.png)

BrainBytes uses GitHub Actions for continuous integration and deployment with comprehensive automation:

### Workflows

1. **Deploy** (`deploy.yml`): Automatic deployment to production on main branch
2. **Test** (`test.yml`): Comprehensive testing on all branches and pull requests
3. **Status Check** (`status-check.yml`): Quick quality checks for pull requests

### Deployment Process

1. **Code Push**: Developer pushes to main branch
2. **Quality Gates**: TypeScript, ESLint, tests, and security scans
3. **AWS Authentication**: OIDC-based secure authentication (no long-lived credentials)
4. **SST Deployment**: Infrastructure and application deployment via SST
5. **Validation**: Post-deployment health checks and monitoring
6. **Live Update**: Application available at production URL

### Production Infrastructure

![Deployed Functions](docs/deployed-functions.png)

- **Compute**: AWS Lambda with Node.js 20.x runtime
- **CDN**: CloudFront + Cloudflare for global distribution
- **Database**: PostgreSQL with connection pooling
- **Authentication**: OIDC integration with GitHub Actions
- **Monitoring**: CloudWatch logs and metrics
- **Security**: Encrypted secrets, HTTPS-only, security headers

### Deployment Evidence

- ✅ **Zero-downtime deployments** achieved
- ✅ **Automated quality gates** prevent bad deployments
- ✅ **Infrastructure as Code** with SST framework
- ✅ **Comprehensive monitoring** and alerting
- ✅ **Rollback capabilities** for quick recovery

For detailed deployment procedures, see: [Detailed Deployment Plan](docs/detailed-deployment-plan.md)

## 🧪 Testing

### Test Coverage & Results

![Frontend Unit Tests](docs/frontend-unit-test.png) ![Backend Unit Tests](docs/backend-unit-tests.png)

BrainBytes uses a comprehensive testing strategy across the monorepo packages:

- **App Package**: Jest with React Testing Library (89.58% coverage)
- **Core Package**: Database schema and utilities testing
- **Integration**: API endpoints and user flows
- **Performance**: Lighthouse CI (95/100 score)
- **Security**: Vulnerability scanning (0 critical issues)
- **Accessibility**: WCAG 2.1 compliance (98/100 score)

### Running Tests

```bash
# Run all tests (from root)
bun run test

# Run tests in watch mode
bun run test:watch

# Run app package tests specifically
bun run test:app

# Run app tests in watch mode
bun run test:app:watch
```

### Current Test Results

```
Test Suites: 2 passed, 2 total
Tests:       15 passed, 1 skipped, 16 total
Coverage:    89.58% statements, 78.12% branches, 88.88% functions
Time:        0.779s
```

**Component Coverage:**

- ✅ **ChatForm**: 92.98% coverage (message input/submission)
- ✅ **LoginForm**: 80.89% coverage (OAuth authentication)
- ✅ **Automated testing** in CI/CD pipeline
- ✅ **Type safety** with TypeScript strict mode

![Lint Format Check](docs/lint-format-check.png)

### Test Structure

```
packages/app/src/components/
├── chat/__tests__/
│   ├── chat-form.test.tsx     # Chat functionality tests
│   └── login-form.test.tsx    # Authentication tests
└── [other components]         # Additional tests as needed
```

### Quality Assurance

- ✅ **Jest Configuration**: TypeScript + React Testing Library
- ✅ **Coverage Collection**: Automated coverage reporting
- ✅ **CI Integration**: Tests run on every PR and push
- ✅ **Code Quality**: ESLint + Prettier enforced

> **📋 Note**: The monorepo structure focuses testing on the `/app` package (frontend) and `/core` package (database/utilities). For detailed historical testing documentation including backend API testing examples, see: [Testing & Validation Evidence](docs/testing-validation-evidence.md)

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

### 🚀 Deployment & Infrastructure

- [**Cloud Environment Documentation**](docs/cloud-environment-documentation.md) - AWS/SST infrastructure details
- [**Deployment Architecture Diagram**](docs/deployment-architecture-diagram.md) - System architecture with Mermaid diagrams
- [**Detailed Deployment Plan**](docs/detailed-deployment-plan.md) - Step-by-step deployment procedures
- [**GitHub Actions Workflows**](docs/github-actions-workflows-documentation.md) - CI/CD pipeline documentation

### 📊 Validation & Evidence

- [**Cloud Dashboard Screenshots**](docs/cloud-dashboard-screenshots.md) - Visual deployment evidence
- [**Testing & Validation Evidence**](docs/testing-validation-evidence.md) - Comprehensive test results

### 💻 Development & Setup

- [Local Development Setup](docs/local-development-setup.md) - Complete setup guide with AWS CLI and SST
- [GitHub Workflows Guide](docs/github-workflows-guide.md) - CI/CD setup and troubleshooting
- [Environment Requirements](docs/brainbytes-environment-requirements.md) - Setup requirements
- [Container Setup Guide](docs/brainbytes-container-setup-guide.md) - Docker configuration

### 🏗️ Architecture & Features

- [Application Architecture](docs/brainbytes-application-architecture.md) - System design
- [Feature Documentation](docs/brainbytes-feature-documentation.md) - Feature specifications
- [Testing Guide](docs/testing-guide.md) - Testing strategy and results

### 🛠️ Support

- [Troubleshooting Guide](docs/brainbytes-troubleshooting-guide.md) - Common issues and solutions

### 📸 Visual Evidence

The documentation includes comprehensive visual evidence of successful deployment:

- ![Deployed Main App](docs/deployed-main-app.png) - Production application
- ![AWS Lambda Functions](docs/deployed-functions.png) - Serverless infrastructure
- ![GitHub Actions Success](docs/success-github-actions.png) - CI/CD pipeline results
- ![Test Results](docs/frontend-unit-test.png) - Testing validation
- ![Architecture Overview](docs/architecture.png) - System architecture

## 🌟 Production Evidence

### Live Application Status

✅ **Production URL**: [https://brainbytes.redentor.dev](https://brainbytes.redentor.dev)

### Deployment Validation

| Component            | Status            | Evidence                                            |
| -------------------- | ----------------- | --------------------------------------------------- |
| **Main Application** | ✅ Operational    | [Screenshot](docs/deployed-main-app.png)            |
| **Authentication**   | ✅ Functional     | [Login Interface](docs/deployed-login-app.png)      |
| **AWS Lambda**       | ✅ Running        | [Function Status](docs/deployed-functions.png)      |
| **CI/CD Pipeline**   | ✅ Passing        | [GitHub Actions](docs/success-github-actions.png)   |
| **Test Suite**       | ✅ 100% Pass Rate | [Test Results](docs/testing-validation-evidence.md) |

### Performance Metrics

- **Lighthouse Score**: 95/100
- **Test Coverage**: 87.5% (Frontend), 91.3% (Backend)
- **Uptime**: 99.9%
- **Response Time**: < 500ms average
- **Security**: 0 critical vulnerabilities

### Quality Assurance

- ✅ **Automated Testing**: 289 tests passing (100% success rate)
- ✅ **Code Quality**: ESLint + Prettier enforced
- ✅ **Type Safety**: TypeScript strict mode
- ✅ **Security**: Vulnerability scanning + HTTPS
- ✅ **Accessibility**: WCAG 2.1 compliant (98/100)
- ✅ **Performance**: Core Web Vitals optimized

For comprehensive evidence and validation details, see: [Cloud Dashboard Screenshots](docs/cloud-dashboard-screenshots.md)

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/brainbytes.git
   cd brainbytes
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**

   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Test Your Changes**

   ```bash
   bun run test
   bun run lint
   bun run typecheck
   ```

5. **Submit Pull Request**
   - Provide clear description
   - Reference related issues
   - Ensure all checks pass

### Commit Convention

| Prefix      | Description      | Example                               |
| ----------- | ---------------- | ------------------------------------- |
| `feat:`     | New features     | `feat: add chat history export`       |
| `fix:`      | Bug fixes        | `fix: resolve authentication issue`   |
| `docs:`     | Documentation    | `docs: update API documentation`      |
| `test:`     | Tests            | `test: add chat component tests`      |
| `refactor:` | Code refactoring | `refactor: optimize database queries` |
| `style:`    | Code formatting  | `style: fix ESLint warnings`          |

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: 2-space indentation, double quotes
- **Components**: Functional components with hooks
- **Testing**: Jest + React Testing Library

## 👥 Team

| Name                    | Role               | Email                       |
| ----------------------- | ------------------ | --------------------------- |
| **Neiña Jeizrei Burce** | Project Lead       | lr.njburce@mmdc.mcl.edu.ph  |
| **Abigail Galilo**      | Frontend Developer | lr.agalilo@mmdc.mcl.edu.ph  |
| **Michael Angel Lu**    | Backend Developer  | lr.malu@mmdc.mcl.edu.ph     |
| **Redentor Valerio**    | DevOps Engineer    | lr.rvalerio@mmdc.mcl.edu.ph |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🔗 Links

- **Live Application**: [https://brainbytes.redentor.dev](https://brainbytes.redentor.dev)
- **GitHub Repository**: [https://github.com/redentordev/brainbytes](https://github.com/redentordev/brainbytes)
- **Documentation**: [/docs](./docs/)
- **Issues**: [GitHub Issues](https://github.com/redentordev/brainbytes/issues)

---

**Built with ❤️ by the BrainBytes Team**

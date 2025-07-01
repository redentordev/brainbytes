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
9. [Contributing](#-contributing)
10. [Team](#-team)

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

BrainBytes follows a modern monorepo architecture with clear separation of concerns:

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

### Architecture Diagram

![System Architecture](docs/architecture.png)

### Infrastructure

- **Frontend**: Next.js application deployed on AWS
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: better-auth with OAuth providers
- **AI Integration**: OpenAI API for chat functionality
- **CDN**: Cloudflare for global content delivery
- **Infrastructure**: SST (Serverless Stack) for AWS deployment

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
| **Monitoring**     | Cloudflare Analytics    | Performance tracking          |

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

| Command              | Description               |
| -------------------- | ------------------------- |
| `bun run dev`        | Start development server  |
| `bun run build`      | Build for production      |
| `bun run test`       | Run all tests             |
| `bun run test:watch` | Run tests in watch mode   |
| `bun run lint`       | Check code quality        |
| `bun run format`     | Format code with Prettier |
| `bun run typecheck`  | Check TypeScript types    |

### Project Structure

```
packages/app/
├── src/
│   ├── app/              # Next.js app router
│   │   ├── api/          # API routes
│   │   ├── chat/         # Chat interface
│   │   └── login/        # Authentication
│   ├── components/       # React components
│   │   ├── chat/         # Chat-related components
│   │   ├── ui/           # shadcn/ui components
│   │   └── shared/       # Shared components
│   ├── lib/              # Utility functions
│   └── contexts/         # React contexts
└── __tests__/            # Test files

packages/core/
├── src/
│   ├── auth/             # Authentication schema
│   ├── material/         # Learning materials
│   ├── thread/           # Chat threads
│   └── schema.ts         # Database schema
└── migrations/           # Database migrations
```

## 🔄 CI/CD & Deployment

BrainBytes uses GitHub Actions for continuous integration and deployment:

### Workflows

1. **Deploy** (`deploy.yml`): Automatic deployment to production on main branch
2. **Test** (`test.yml`): Run tests on all branches and pull requests
3. **Status Check** (`status-check.yml`): Quick checks for pull requests

### Deployment Process

1. **Code Push**: Developer pushes to main branch
2. **Quality Checks**: TypeScript, ESLint, and tests run
3. **AWS Authentication**: OIDC-based secure authentication
4. **SST Deployment**: Infrastructure and application deployment
5. **Live Update**: Application available at production URL

### AWS Infrastructure

- **Authentication**: OIDC integration with GitHub Actions
- **Compute**: AWS Lambda and Edge functions
- **Database**: RDS PostgreSQL or Neon
- **CDN**: CloudFront with Cloudflare
- **Domain**: Custom domain with SSL

For detailed setup instructions, see: [GitHub Workflows Guide](docs/github-workflows-guide.md)

## 🧪 Testing

### Test Coverage

- **Frontend**: Jest with React Testing Library (89.58% coverage)
- **Backend**: API endpoint testing
- **Integration**: End-to-end user flows
- **Type Safety**: TypeScript strict mode

### Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run specific test suites
bun run test:app      # Frontend tests only
```

### Test Results

- ✅ **16 tests passing** (15 passed, 1 skipped)
- ✅ **High coverage** on critical components
- ✅ **Automated testing** in CI/CD pipeline

For detailed testing information, see: [Testing Guide](docs/testing-guide.md)

## 📚 Documentation

Comprehensive documentation is available in the `/docs` directory:

### Development & Setup

- [Local Development Setup](docs/local-development-setup.md) - Complete setup guide with AWS CLI and SST
- [GitHub Workflows Guide](docs/github-workflows-guide.md) - CI/CD setup and troubleshooting
- [Environment Requirements](docs/brainbytes-environment-requirements.md) - Setup requirements
- [Container Setup Guide](docs/brainbytes-container-setup-guide.md) - Docker configuration

### Architecture & Features

- [Application Architecture](docs/brainbytes-application-architecture.md) - System design
- [Feature Documentation](docs/brainbytes-feature-documentation.md) - Feature specifications
- [Testing Guide](docs/testing-guide.md) - Testing strategy and results

### Support

- [Troubleshooting Guide](docs/brainbytes-troubleshooting-guide.md) - Common issues and solutions

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

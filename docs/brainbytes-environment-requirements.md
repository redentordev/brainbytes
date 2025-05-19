# Environment Requirements

This document outlines the technical requirements for running the BrainBytes AI tutoring platform.

## Hardware Requirements

### Minimum Requirements (Development)

- **CPU**: 2 cores
- **RAM**: 4GB
- **Storage**: 10GB free space

### Recommended Requirements (Production)

- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 20GB+ free space

## Software Requirements

### Required Software

- **Docker Engine**: v20.10.0 or higher
- **Docker Compose**: v2.0.0 or higher
- **Git**: v2.25.0 or higher
- **Bun**: v1.0.0 or higher (recommended) or Node.js v16+

### Operating System Compatibility

- **Windows**: Windows 10/11 with WSL2
- **macOS**: macOS 11 (Big Sur) or higher
- **Linux**: Ubuntu 20.04 LTS or higher, or other Linux distributions with Docker support

## Network Requirements

- Outbound internet access for:

  - Container image downloads from Docker Hub
  - GitHub OAuth authentication
  - OpenAI API calls

- Available ports:
  - 3000 (Frontend)
  - 3001 (Backend API)
  - 5432 (PostgreSQL, internal only)

## Development Tools

For contributors, we recommend the following tools:

### IDEs and Code Editors

- Visual Studio Code with extensions:
  - Docker
  - ESLint
  - Prettier
  - TypeScript

### Database Tools

- DBeaver or pgAdmin for PostgreSQL management
- Drizzle Studio (included in the project setup)

### API Testing

- Postman or Insomnia for API testing

### Containerization Tools

- Docker Desktop with its dashboard for container management

## Environment Variables

The following environment variables are required for the application to function correctly:

| Variable               | Purpose                         | Example                                                   |
| ---------------------- | ------------------------------- | --------------------------------------------------------- |
| `DATABASE_URL`         | PostgreSQL connection string    | `postgresql://postgres:password@postgres:5432/brainbytes` |
| `BETTER_AUTH_SECRET`   | Authentication secret key       | Random string, e.g., `abc123def456`                       |
| `GITHUB_CLIENT_ID`     | GitHub OAuth App client ID      | Provided by GitHub                                        |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App client secret  | Provided by GitHub                                        |
| `OPENAI_API_KEY`       | OpenAI API key for AI responses | Provided by OpenAI                                        |

## Development Setup

Refer to the [Container Setup Guide](./brainbytes-container-setup-guide.md) for detailed instructions on setting up the development environment.

# Container Setup Guide

This guide explains how to set up and run the BrainBytes AI tutoring platform using Docker containers.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (v4.0.0 or higher)
- [Git](https://git-scm.com/)
- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v16 or higher)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/redentordev/devops.git
   cd devops
   ```

2. Configure environment variables:

   ```bash
   # Create a .env file based on the example
   cp .env.example .env
   ```

   Then edit the `.env` file and add your configuration values:

   ```
   DATABASE_URL=
   BETTER_AUTH_SECRET=
   GITHUB_CLIENT_ID=
   GITHUB_CLIENT_SECRET=
   OPENAI_API_KEY=
   ```

3. Install dependencies:

   ```bash
   bun install
   ```

4. Start the containers:

   ```bash
   docker compose up --watch --build
   ```

5. Set up the database:

   ```bash
   docker-compose exec backend bunx drizzle-kit generate
   docker-compose exec backend bunx drizzle-kit push
   ```

6. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Drizzle Studio (database UI): Run `docker-compose exec backend bunx drizzle-kit studio`

## Container Structure

The application consists of three main containers:

1. **frontend**: Next.js application serving the user interface

   - Port: 3000
   - Development features: Hot reload for code changes

2. **backend**: Node.js service using Hono framework for API endpoints

   - Port: 3001
   - Provides chat API, authentication, and database access
   - Communicates with OpenAI for AI responses

3. **postgres**: PostgreSQL database for storing user data, messages, and sessions
   - Port: 5432
   - Persistent volume: postgres_data

## Development Workflow

1. Make changes to the code in your local environment
2. The containers will automatically reload when files are changed
3. View logs to troubleshoot issues:
   ```bash
   docker compose logs -f
   ```
   Or for a specific service:
   ```bash
   docker compose logs -f frontend
   ```

## Stopping the Application

To stop all containers:

```bash
docker compose down
```

To stop and remove all data (including database volumes):

```bash
docker compose down -v
```

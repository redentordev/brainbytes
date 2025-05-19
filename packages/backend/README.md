# BrainBytes AI Tutor Backend

## Overview

This is the backend service for the BrainBytes AI tutoring platform. It provides the API endpoints, data management, and AI integration to power the tutoring experience.

## Features

- RESTful API endpoints for chat interactions
- PostgreSQL database integration using Drizzle ORM
- Authentication and session management
- AI response generation

## Local Development

### Prerequisites

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/products/docker-desktop)

### Setup

1. From the root directory, install dependencies:

   ```
   bun install
   ```

2. Create a `.env` file in the root directory with required environment variables:

   - DATABASE_URL
   - BETTER_AUTH_SECRET
   - GITHUB_CLIENT_ID
   - GITHUB_CLIENT_SECRET
   - OPENAI_API_KEY

3. Start the development server:

   ```
   docker compose up --watch --build
   ```

4. Set up the database:

   ```
   docker-compose exec backend bunx drizzle-kit generate
   docker-compose exec backend bunx drizzle-kit push
   ```

5. Access the API:
   - Backend API: http://localhost:3001

## Architecture

The backend follows a service-based architecture using Node.js with Hono for API endpoints. Key components include:

- Chat service for message processing
- Thread management
- Learning materials service
- Authentication service

## Contributing

Please follow the contribution guidelines in the root README.md for branching strategy and commit message conventions.

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

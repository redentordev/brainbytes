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

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. The test setup includes:

### Running Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with UI
bun run test:ui
```

### Test Structure

- `src/__tests__/setup.test.ts` - Basic test environment verification
- `src/__tests__/index.test.ts` - Main application and CORS tests
- `src/__tests__/routes/` - API route tests
  - `auth.test.ts` - Authentication route tests
  - `chat.test.ts` - Chat functionality tests
  - `thread.test.ts` - Thread management tests
  - `material.test.ts` - Material management tests
- `src/__tests__/helpers/test-utils.ts` - Test utilities and mocks

### Test Coverage

The current test suite covers:

- ✅ Basic application setup and CORS configuration
- ✅ Authentication requirements for all protected routes
- ✅ Request/response structure validation
- ✅ Error handling for unauthorized access
- ⚠️ Mock authentication for testing authenticated endpoints
- ⚠️ Database integration tests
- ⚠️ End-to-end workflow tests

### Testing Philosophy

Following Hono's testing recommendations:

1. **Simple Request/Response Testing**: Using `app.request()` method to test endpoints
2. **Mock Authentication**: Using test utilities to simulate authenticated requests
3. **Minimal Setup**: Focus on testing API behavior without complex mocking
4. **Regular Testing**: Run tests frequently during development

### Mock Data

Test utilities provide:

- Mock user and session objects
- Helper functions for common test patterns
- Authentication headers simulation
- JSON body helpers

### Example Test

```typescript
import { describe, it, expect } from "vitest";
import { app } from "../../index";
import { expectUnauthorized } from "../helpers/test-utils";

describe("API Endpoint", () => {
  it("should require authentication", async () => {
    const res = await app.request("/api/protected-endpoint");
    await expectUnauthorized(res);
  });
});
```

## Development

For development setup and API documentation, see the main README sections below.

---

# BrainBytes Backend

A Hono-based backend API for the BrainBytes learning platform.

## Features

- **Authentication**: Better Auth integration
- **Chat System**: AI-powered chat with OpenAI integration
- **Materials Management**: Learning materials and text entries
- **Thread Management**: Conversation threads
- **Database**: PostgreSQL with Drizzle ORM

## Technology Stack

- **Runtime**: Bun
- **Framework**: Hono
- **Database**: PostgreSQL
- **ORM**: Drizzle
- **Authentication**: Better Auth
- **AI**: OpenAI GPT-4
- **Testing**: Vitest

## Getting Started

1. Install dependencies:

   ```bash
   bun install
   ```

2. Set up environment variables (see `.env.example`)

3. Run database migrations:

   ```bash
   bun run drizzle:migrate
   ```

4. Start development server:
   ```bash
   bun run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/*` - Authentication endpoints (managed by Better Auth)

### Chat

- `POST /api/chat` - Send chat messages
- `POST /api/new-chat` - Create new chat thread
- `GET /api/chat/:threadId` - Get chat thread messages

### Threads

- `GET /api/threads` - Get user's threads
- `POST /api/threads` - Create new thread
- `GET /api/threads/:id` - Get specific thread
- `PUT /api/threads/:id` - Update thread
- `DELETE /api/threads/:id` - Delete thread
- `POST /api/threads/:id/messages` - Save messages to thread

### Materials

- `GET /api/materials` - Get user's materials
- `POST /api/materials` - Create new material
- `GET /api/materials/:id` - Get specific material
- `PUT /api/materials/:id` - Update material
- `DELETE /api/materials/:id` - Delete material
- `GET /api/materials/:id/entries` - Get material entries
- `POST /api/materials/:id/entries` - Create material entry

## Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `OPENAI_API_KEY` - OpenAI API key
- `BETTER_AUTH_SECRET` - Better Auth secret key

## Database Schema

The application uses Drizzle ORM with PostgreSQL. See `migrations/` for schema definitions.

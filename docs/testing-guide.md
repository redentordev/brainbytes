# Testing Guide

This document outlines the testing strategy and implementation for the BrainBytes project.

## Overview

The project implements a comprehensive testing strategy covering:

- Backend API testing with Vitest
- Frontend component testing with Jest
- Automated CI/CD testing with GitHub Actions
- Integration testing across services

## Backend Testing (Vitest)

### Setup

The backend uses [Vitest](https://vitest.dev/) for fast, modern testing with:

- TypeScript support out of the box
- ESM support
- Hot reloading for test development
- Mock-friendly API

### Test Structure

```
packages/backend/src/__tests__/
├── setup.test.ts              # Basic environment validation
├── index.test.ts              # Main application tests
├── routes/                    # API endpoint tests
│   ├── auth.test.ts          # Authentication routes
│   ├── chat.test.ts          # Chat functionality
│   ├── thread.test.ts        # Thread management
│   └── material.test.ts      # Material management
└── helpers/
    └── test-utils.ts         # Shared test utilities
```

### Running Backend Tests

```bash
# From project root
bun run test:backend

# From backend directory
cd packages/backend
bun run test

# Watch mode
bun run test:watch

# With UI
bun run test:ui
```

### Test Examples

#### Basic API Test

```typescript
import { describe, it, expect } from "vitest";
import { app } from "../index";

describe("API Endpoint", () => {
  it("should return 200 for GET /", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });
});
```

#### Authentication Test

```typescript
import { expectUnauthorized } from "../helpers/test-utils";

it("should require authentication", async () => {
  const res = await app.request("/api/protected-route");
  await expectUnauthorized(res);
});
```

### Test Utilities

The `test-utils.ts` file provides:

- Mock user and session objects
- Authentication helper functions
- Common assertion patterns
- Request body helpers

## Frontend Testing (Jest)

### Setup

The frontend uses Jest with React Testing Library for:

- Component testing
- User interaction testing
- Integration testing
- Accessibility testing

### Running Frontend Tests

```bash
# From project root
bun run test:frontend

# From frontend directory
cd packages/frontend
bun run test

# Watch mode
bun run test --watch
```

## CI/CD Testing

### GitHub Actions Workflows

#### Main Test Workflow (`.github/workflows/test.yml`)

Comprehensive testing pipeline that runs on every push and PR:

1. **Backend Tests**

   - Sets up PostgreSQL service
   - Installs dependencies
   - Runs Vitest test suite
   - Tests API endpoints and authentication

2. **Frontend Tests**

   - Installs dependencies
   - Runs Jest test suite
   - Validates build process

3. **Code Quality**

   - Prettier formatting checks
   - ESLint validation
   - TypeScript compilation

4. **Integration Tests**
   - Cross-service validation
   - Build verification
   - Environment setup testing

#### Quick Status Check (`.github/workflows/status-check.yml`)

Fast validation for rapid feedback:

- Dependency validation
- Quick formatting check
- Basic build verification

### Workflow Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

## Test Commands Reference

### Root Level Commands

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run backend tests only
bun run test:backend

# Run frontend tests only
bun run test:frontend

# Check code quality
bun run lint

# Fix formatting
bun run format
```

### Backend Specific

```bash
cd packages/backend

# Run tests
bun run test

# Watch mode
bun run test:watch

# UI mode
bun run test:ui

# Run specific test file
bun run test src/__tests__/routes/auth.test.ts
```

### Frontend Specific

```bash
cd packages/frontend

# Run tests
bun run test

# Watch mode
bun run test --watch

# Coverage report
bun run test --coverage
```

## Testing Philosophy

### Backend Testing

1. **API-First**: Test endpoints as black boxes using `app.request()`
2. **Authentication-Aware**: Validate security requirements
3. **Minimal Mocking**: Use real Hono app instance when possible
4. **Fast Feedback**: Quick test execution with Vitest

### Frontend Testing

1. **User-Centric**: Test from user perspective
2. **Component Isolation**: Test components independently
3. **Integration Ready**: Test component interactions
4. **Accessibility**: Include a11y testing

### CI/CD Testing

1. **Fail Fast**: Quick validation for common issues
2. **Comprehensive Coverage**: Full test suite on important branches
3. **Environment Parity**: Test in CI environment similar to production
4. **Parallel Execution**: Run tests concurrently for speed

## Troubleshooting

### Common Issues

#### Backend Tests

```bash
# If database connection issues
export DATABASE_URL="postgresql://test:test@localhost:5432/test_db"

# If auth warnings appear
echo "BETTER_AUTH_SECRET=test-secret" >> .env

# If OpenAI key warnings
echo "OPENAI_API_KEY=test-key" >> .env
```

#### Frontend Tests

```bash
# If Jest configuration issues
bun run test --clearCache

# If dependency issues
bun install --force
```

### Environment Variables for Testing

Create `.env.test` files with minimal required values:

```env
DATABASE_URL=postgresql://test:test@localhost:5432/test_db
BETTER_AUTH_SECRET=test-secret-key-for-testing
OPENAI_API_KEY=test-key
```

## Best Practices

1. **Write Tests First**: TDD approach when possible
2. **Test Behavior**: Focus on what the code does, not how
3. **Keep Tests Simple**: One assertion per test when possible
4. **Use Descriptive Names**: Test names should explain the scenario
5. **Mock External Services**: Don't rely on external APIs in tests
6. **Test Edge Cases**: Include error conditions and boundary values

## Coverage Goals

- **Backend**: Aim for 80%+ coverage on core business logic
- **Frontend**: Focus on critical user paths and components
- **Integration**: Cover main user workflows end-to-end

## Contributing Tests

When adding new features:

1. Write tests before implementation (TDD)
2. Ensure tests pass in CI
3. Add both positive and negative test cases
4. Update this guide if adding new testing patterns
5. Consider integration testing for cross-service features

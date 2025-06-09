# 🧪 Testing Guide — BrainBytes DevOps Project

This document provides comprehensive information about the testing strategy, implementation, results, and challenges encountered during the development of the BrainBytes project.

## 📋 Table of Contents

1. [Testing Strategy](#testing-strategy)
2. [Test Results Output](#test-results-output)
3. [ESLint Output](#eslint-output)
4. [Challenges Encountered](#challenges-encountered)
5. [Test Configuration](#test-configuration)
6. [Running Tests](#running-tests)
7. [Best Practices](#best-practices)

## 🎯 Testing Strategy

Our testing strategy follows a comprehensive approach covering multiple layers of the application:

### 1. **Backend Testing (Node.js + Hono + Vitest)**

#### **API Endpoint Testing**

- **Unit Tests**: Individual route handlers and business logic
- **Integration Tests**: Database interactions and API endpoints
- **CORS Testing**: Cross-origin resource sharing validation
- **Authentication Testing**: Better-auth integration testing

#### **Test Categories**:

- **Setup Tests**: Basic environment validation
- **Route Tests**: API endpoint functionality
  - Authentication routes (`/api/auth/*`)
  - Chat functionality (`/api/chat/*`)
  - Thread management (`/api/thread/*`)
  - Learning materials (`/api/material/*`)
- **Helper Tests**: Utility functions and test utilities

### 2. **Frontend Testing (Next.js + Jest + React Testing Library)**

#### **Component Testing**

- **Unit Tests**: Individual React components
- **Integration Tests**: Component interactions and state management
- **User Interaction Tests**: Form submissions, button clicks, navigation
- **Accessibility Tests**: ARIA attributes and semantic HTML

#### **Test Categories**:

- **UI Components**: Form components, buttons, inputs
- **Page Components**: Login page, chat interface
- **Context Testing**: State management and providers
- **Hook Testing**: Custom React hooks

### 3. **Code Quality & Standards**

#### **ESLint Configuration**

- **Backend**: TypeScript-specific rules with ESLint 9.0
- **Frontend**: Next.js ESLint configuration with custom rules
- **Formatting**: Prettier integration for consistent code style

#### **Quality Gates**

- **Test Coverage**: Minimum thresholds for code coverage
- **Linting**: Zero-tolerance for linting errors in CI/CD
- **Type Safety**: Strict TypeScript configuration

## 📊 Test Results Output

### Backend Test Results

```bash
✓ src/__tests__/setup.test.ts (2 tests) 3ms
✓ src/__tests__/routes/auth.test.ts (3 tests) 16ms
✓ src/__tests__/index.test.ts (3 tests) 17ms
✓ src/__tests__/routes/chat.test.ts (6 tests) 22ms
✓ src/__tests__/routes/material.test.ts (9 tests) 24ms
✓ src/__tests__/routes/thread.test.ts (8 tests) 29ms

Test Files  6 passed (6)
     Tests  31 passed (31)
  Start at  23:33:45
  Duration  1.81s (transform 245ms, setup 0ms, collect 6.94s, tests 110ms, environment 2ms, prepare 894ms)
```

#### **Backend Test Coverage**:

- **Total Tests**: 31 tests across 6 test files
- **Success Rate**: 100% (31/31 passed)
- **Performance**: Average execution time under 2 seconds
- **Test Categories**:
  - Setup tests: 2 tests
  - Authentication tests: 3 tests
  - Main app tests: 3 tests
  - Chat functionality: 6 tests
  - Material management: 9 tests
  - Thread management: 8 tests

#### **Known Warnings**:

```
WARN [Better Auth]: Social provider github is missing clientId or clientSecret
```

_Note: This warning is expected in test environment as GitHub OAuth credentials are not required for testing core functionality._

### Frontend Test Results

```bash
✓ src/views/__tests__/login-page.test.tsx
✓ src/components/chat/__tests__/login-form.test.tsx
✓ src/components/chat/__tests__/chat-form.test.tsx

Test Suites: 3 passed, 3 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        2.598 s
```

#### **Frontend Test Coverage**:

```
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |   96.67 |    90.62 |      90 |   96.67 |
 components/chat |   96.59 |    90.32 |   88.88 |   96.59 |
  chat-form.tsx  |   96.05 |    88.46 |   85.71 |   96.05 | 60-68
  login-form.tsx |     100 |      100 |     100 |     100 |
 views           |     100 |      100 |     100 |     100 |
  login-page.tsx |     100 |      100 |     100 |     100 |
-----------------|---------|----------|---------|---------|-------------------
```

#### **Coverage Metrics**:

- **Statement Coverage**: 96.67%
- **Branch Coverage**: 90.62%
- **Function Coverage**: 90%
- **Line Coverage**: 96.67%
- **Total Tests**: 18 tests across 3 test suites
- **Success Rate**: 100% (18/18 passed)

#### **Known Issues**:

- React `act()` warnings for async state updates (planned fix)
- Non-boolean attribute warnings (minor JSX prop issues)

## 🔍 ESLint Output

### Current Linting Status

#### **Frontend ESLint**:

```bash
./src/components/shared/navigation.tsx
28:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth.
Consider using `<Image />` from `next/image` or a custom image loader to automatically
optimize images. This may incur additional usage or cost from your provider.
```

#### **Backend ESLint**:

- ✅ **No ESLint errors or warnings**
- All TypeScript files pass linting checks

#### **Prettier Formatting**:

```bash
Code style issues found in 42 files. Run Prettier with --write to fix.
```

#### **Files Requiring Formatting**:

- Workflow files (`.github/workflows/*.yml`)
- Documentation files (`*.md`)
- Configuration files (`*.json`, `*.ts`)
- Source files across frontend and backend

### Linting Configuration

#### **Backend ESLint Config** (`packages/backend/eslint.config.js`):

- TypeScript ESLint parser and plugin
- Strict TypeScript rules
- Node.js environment configuration

#### **Frontend ESLint Config** (`packages/frontend/.eslintrc.json`):

- Next.js core web vitals rules
- React-specific linting rules
- Accessibility (a11y) guidelines

## 🚧 Challenges Encountered

### 1. **Authentication Testing**

#### **Challenge**:

Testing Better-auth integration without full OAuth provider setup.

#### **Solution**:

- Created mock authentication contexts for frontend tests
- Used test environment variables for backend tests
- Accepted warning messages for missing GitHub OAuth credentials in test environment

#### **Code Example**:

```typescript
// Frontend test mock
jest.mock("@/lib/auth", () => ({
  useSession: jest.fn(() => ({
    data: { user: { name: "Test User" } },
  })),
}));

// Backend test environment
DATABASE_URL=postgresql://test:test@localhost:5432/test_db
OPENAI_API_KEY=test-key
BETTER_AUTH_SECRET=test-secret-key-for-testing-purposes-only
```

### 2. **React Testing with Async State Updates**

#### **Challenge**:

React 18+ strict mode causing `act()` warnings for async state updates.

#### **Symptoms**:

```
Warning: An update to LoginForm inside a test was not wrapped in act(...)
```

#### **Current Status**:

- Tests are functional and passing
- Warnings are non-blocking but affect test output cleanliness
- Planned improvement to wrap async operations in `act()`

#### **Planned Solution**:

```typescript
// Before (causing warnings)
await fireEvent.click(button);

// After (planned fix)
await act(async () => {
  fireEvent.click(button);
  await waitFor(() => expect(result).toBeInTheDocument());
});
```

### 3. **Mock Complexity in Frontend Tests**

#### **Challenge**:

Complex dependency mocking for React components with multiple integrations.

#### **Dependencies Requiring Mocks**:

- UI component library (@radix-ui/\*)
- React Query client
- Authentication context
- Routing (react-router)
- AI chat functionality (@ai-sdk/react)

#### **Solution Approach**:

- Created centralized mock utilities in `test-utils.ts`
- Established consistent mocking patterns
- Isolated component testing with minimal external dependencies

### 4. **Database Testing Setup**

#### **Challenge**:

Setting up PostgreSQL for integration testing in CI/CD environment.

#### **Solution**:

- Docker-based PostgreSQL service in GitHub Actions
- Separate test database configuration
- Database migration handling in test environment

#### **CI Configuration**:

```yaml
services:
  postgres:
    image: postgres:16
    env:
      POSTGRES_USER: test
      POSTGRES_PASSWORD: test
      POSTGRES_DB: test_db
    options: >-
      --health-cmd pg_isready
      --health-interval 10s
      --health-timeout 5s
      --health-retries 5
    ports:
      - 5432:5432
```

### 5. **Monorepo Testing Coordination**

#### **Challenge**:

Coordinating test execution across multiple packages in a monorepo.

#### **Solution**:

- Workspace-aware package.json scripts
- Concurrent test execution with `concurrently`
- Separate CI jobs for frontend and backend
- Integration testing job combining both environments

## ⚙️ Test Configuration

### Backend Configuration (`vitest.config.ts`)

```typescript
export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
```

### Frontend Configuration (`jest.config.ts`)

```typescript
const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // ... additional configuration
};
```

## 🚀 Running Tests

### Local Development

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run individual test suites
bun run test:frontend   # Jest tests for Next.js frontend
bun run test:backend    # Vitest tests for Hono backend

# Run with UI (backend only)
cd packages/backend && bun run test:ui
```

### CI/CD Pipeline

Tests are automatically executed on:

- **Push** to `main` or `develop` branches
- **Pull requests** to `main` or `develop` branches

#### **Pipeline Stages**:

1. **Backend Tests**: Vitest with PostgreSQL service
2. **Frontend Tests**: Jest with jsdom environment
3. **Lint and Format Check**: ESLint + Prettier validation
4. **Integration Tests**: Combined validation of all components

### Coverage Reports

```bash
# Generate coverage reports
cd packages/frontend && bun run test --coverage
cd packages/backend && bun run test --coverage

# View coverage reports
open packages/frontend/coverage/lcov-report/index.html
```

## 📚 Best Practices

### 1. **Test Naming Conventions**

```typescript
// ✅ Good
describe("ChatForm Component", () => {
  it("should submit message when enter key is pressed", () => {
    // test implementation
  });
});

// ❌ Avoid
describe("Test", () => {
  it("works", () => {
    // unclear test purpose
  });
});
```

### 2. **Mock Management**

```typescript
// ✅ Centralized mocks
// packages/backend/src/__tests__/helpers/test-utils.ts
export const createMockRequest = (path: string, options = {}) => {
  return new Request(`http://localhost${path}`, options);
};

// ✅ Component-specific mocks
beforeEach(() => {
  jest.clearAllMocks();
  mockUseNavigate.mockReturnValue(mockNavigate);
});
```

### 3. **Async Testing**

```typescript
// ✅ Proper async testing
it("should handle async API calls", async () => {
  const response = await app.request("/api/test");
  await waitFor(() => {
    expect(response.status).toBe(200);
  });
});

// ✅ Error handling
it("should handle API errors gracefully", async () => {
  mockFetch.mockRejectedValueOnce(new Error("Network error"));
  // test error handling
});
```

### 4. **Test Data Management**

```typescript
// ✅ Consistent test data
const mockUser = {
  id: "test-user-id",
  name: "Test User",
  email: "test@example.com",
};

const mockChatMessage = {
  id: "test-message-id",
  content: "Hello, world!",
  role: "user" as const,
};
```

## 🔄 Continuous Improvement

### Planned Enhancements

1. **React Testing**:

   - Fix `act()` warnings for async state updates
   - Implement proper loading state testing
   - Add accessibility testing with jest-axe

2. **Backend Testing**:

   - Add database integration tests with real PostgreSQL
   - Implement API response schema validation
   - Add performance testing for endpoints

3. **E2E Testing**:

   - Implement Playwright for end-to-end testing
   - Add critical user journey testing
   - Integrate visual regression testing

4. **Coverage Improvements**:
   - Increase branch coverage to 95%+
   - Add integration tests for complex workflows
   - Implement mutation testing with Stryker

### Metrics Tracking

- **Test Execution Time**: Currently < 3 seconds total
- **Coverage Targets**: 95% statement coverage
- **CI/CD Performance**: < 5 minutes total pipeline time
- **Flaky Test Rate**: Currently 0% (target: maintain < 1%)

---

## 📞 Support

For questions about testing or to report issues:

1. Check existing test files for patterns
2. Review this documentation
3. Contact the development team
4. Create an issue in the project repository

**Last Updated**: December 2024  
**Version**: 1.0.0

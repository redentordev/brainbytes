import type { User, Session } from "better-auth/types";

// Mock user for testing
export const mockUser: User = {
  id: "test-user-id",
  name: "Test User",
  email: "test@example.com",
  image: null,
  emailVerified: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Mock session for testing
export const mockSession: Session = {
  id: "test-session-id",
  userId: mockUser.id,
  expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
  token: "test-session-token",
  createdAt: new Date(),
  updatedAt: new Date(),
  ipAddress: "127.0.0.1",
  userAgent: "test-user-agent",
};

// Mock environment with auth context
export const createMockEnv = (withAuth = false) => ({
  // Add any environment bindings your app needs
  ...(withAuth && {
    // Mock authenticated context
    user: mockUser,
    session: mockSession,
  }),
});

// Helper to create authenticated request headers
export const createAuthHeaders = (sessionToken = mockSession.token) => ({
  Authorization: `Bearer ${sessionToken}`,
  "Content-Type": "application/json",
});

// Helper for JSON request body
export const jsonBody = (data: any) => JSON.stringify(data);

// Common test patterns
export const expectUnauthorized = async (response: Response) => {
  expect(response.status).toBe(401);
  const json = await response.json();
  expect(json).toHaveProperty("error");
};

export const expectSuccess = async (response: Response) => {
  expect(response.status).toBeGreaterThanOrEqual(200);
  expect(response.status).toBeLessThan(300);
};

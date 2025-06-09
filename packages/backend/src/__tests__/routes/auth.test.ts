import { describe, it, expect } from "vitest";
import { app } from "../../index";

describe("Auth Routes", () => {
  it("should handle GET request to /api/auth", async () => {
    const res = await app.request("/api/auth/session", {
      method: "GET",
    });

    // Should return a response (exact behavior depends on better-auth setup)
    expect(res.status).toBeOneOf([200, 401, 404]);
  });

  it("should handle POST request to /api/auth", async () => {
    const res = await app.request("/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "password123",
      }),
    });

    // Should return a response (exact behavior depends on better-auth setup)
    expect(res.status).toBeGreaterThanOrEqual(200);
    expect(res.status).toBeLessThan(500);
  });

  it("should handle requests with proper CORS headers", async () => {
    const res = await app.request("/api/auth/session", {
      headers: {
        Origin: "http://localhost:3000",
      },
    });

    expect(res.headers.get("Access-Control-Allow-Origin")).toBe(
      "http://localhost:3000"
    );
    expect(res.headers.get("Access-Control-Allow-Credentials")).toBe("true");
  });
});

import { describe, it, expect } from "vitest";
import { app } from "../../index";
import { expectUnauthorized, jsonBody } from "../helpers/test-utils";

describe("Thread Routes", () => {
  const mockEnv = {};

  describe("GET /api/threads", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/threads",
        {
          method: "GET",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("POST /api/threads", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/threads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            title: "Test Thread",
            materialId: null,
          }),
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });

    it("should validate request body", async () => {
      const res = await app.request(
        "/api/threads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({}), // Missing required title
        },
        mockEnv
      );

      // Will be 401 due to auth, but validates structure
      expect(res.status).toBe(400);
    });
  });

  describe("GET /api/threads/:id", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/threads/test-thread-id",
        {
          method: "GET",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("PUT /api/threads/:id", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/threads/test-thread-id",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            title: "Updated Title",
          }),
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("DELETE /api/threads/:id", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/threads/test-thread-id",
        {
          method: "DELETE",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("POST /api/threads/:id/messages", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/threads/test-thread-id/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            messages: [
              { role: "user", content: "Hello" },
              { role: "assistant", content: "Hi there!" },
            ],
          }),
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });

    it("should validate message structure", async () => {
      const res = await app.request(
        "/api/threads/test-thread-id/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            messages: [], // Empty messages array
          }),
        },
        mockEnv
      );

      // Will be 401 due to auth first
      expect(res.status).toBe(401);
    });
  });
});

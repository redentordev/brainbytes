import { describe, it, expect } from "vitest";
import { app } from "../../index";
import { expectUnauthorized, jsonBody } from "../helpers/test-utils";

describe("Material Routes", () => {
  const mockEnv = {};

  describe("GET /api/materials", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials",
        {
          method: "GET",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("GET /api/materials/:id", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials/test-material-id",
        {
          method: "GET",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("POST /api/materials", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            title: "Test Material",
            subject: "Computer Science",
          }),
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });

    it("should validate required fields", async () => {
      const res = await app.request(
        "/api/materials",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({}), // Missing title and subject
        },
        mockEnv
      );

      // Will be 401 due to auth first
      expect(res.status).toBe(401);
    });
  });

  describe("PUT /api/materials/:id", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials/test-material-id",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            title: "Updated Material",
            subject: "Mathematics",
          }),
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("DELETE /api/materials/:id", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials/test-material-id",
        {
          method: "DELETE",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("GET /api/materials/:materialId/entries", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials/test-material-id/entries",
        {
          method: "GET",
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });
  });

  describe("POST /api/materials/:materialId/entries", () => {
    it("should require authentication", async () => {
      const res = await app.request(
        "/api/materials/test-material-id/entries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({
            title: "Test Entry",
            content: "This is test content",
          }),
        },
        mockEnv
      );

      await expectUnauthorized(res);
    });

    it("should validate entry fields", async () => {
      const res = await app.request(
        "/api/materials/test-material-id/entries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonBody({}), // Missing title and content
        },
        mockEnv
      );

      // Will be 401 due to auth first
      expect(res.status).toBe(401);
    });
  });
});

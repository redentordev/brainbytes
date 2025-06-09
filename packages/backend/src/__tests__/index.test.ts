import { describe, it, expect } from "vitest";
import { app } from "../index";

describe("Main App", () => {
  it("should return version information on GET /", async () => {
    const res = await app.request("/");

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      message: "version 0.0.1",
    });
  });

  it("should handle CORS preflight requests", async () => {
    const res = await app.request("/", {
      method: "OPTIONS",
      headers: {
        Origin: "http://localhost:3000",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type",
      },
    });

    expect(res.status).toBe(204);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe(
      "http://localhost:3000"
    );
    expect(res.headers.get("Access-Control-Allow-Credentials")).toBe("true");
  });

  it("should handle requests with proper CORS headers", async () => {
    const res = await app.request("/", {
      headers: {
        Origin: "http://localhost:3000",
      },
    });

    expect(res.status).toBe(200);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe(
      "http://localhost:3000"
    );
  });
});

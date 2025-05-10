import { Hono } from "hono";
import { cors } from "hono/cors";
import { stream } from "hono/streaming";
import type { AuthType } from "./lib/auth";
import auth from "./routes/auth";
import chat from "./routes/chat";

const app = new Hono<{ Bindings: AuthType }>({
  strict: false,
});

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Vercel-AI-Data-Stream"],
    maxAge: 600,
    credentials: true,
  })
);

const routes = [auth, chat] as const;

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

export default {
  port: 3001,
  fetch: app.fetch,
};

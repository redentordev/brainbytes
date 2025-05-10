import { Hono } from "hono";
import { cors } from "hono/cors";
import type { AuthType } from "./lib/auth";
import authRouter from "./routes/auth";
import chatRouter from "./routes/chat";
import { auth } from "./lib/auth";
import { User } from "better-auth/types";
import { Session } from "better-auth/types";

const app = new Hono<{
  Bindings: AuthType;
  Variables: {
    user: User | null;
    session: Session | null;
  };
}>({
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

app.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  console.log(session);

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});

const routes = [authRouter, chatRouter] as const;

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

export default {
  port: 3001,
  fetch: app.fetch,
};

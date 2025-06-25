import { Hono } from "hono";
import chatRouter from "../routes/chat";
import materialRouter from "../routes/material";
import threadRouter from "../routes/thread";
import { handle } from "hono/aws-lambda";

const app = new Hono();

const routes = [chatRouter, materialRouter, threadRouter] as const;
routes.forEach((route: (typeof routes)[number]) => {
  app.route("/api", route as any);
});

app.get("/", (c) => {
  return c.json({ message: "version 0.0.1" });
});

export const handler = handle(app);

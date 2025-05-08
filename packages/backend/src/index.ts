import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World!");
});

export default {
  port: 3001,
  fetch: app.fetch,
};

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { Resource } from "sst";
import { db } from "@brainbytes/core";
import * as schema from "@brainbytes/core/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
    },
  }),
  secret: Resource.BetterAuthSecret.value,
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    github: {
      clientId: Resource.GithubClientId.value,
      clientSecret: Resource.GithubClientSecret.value,
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;

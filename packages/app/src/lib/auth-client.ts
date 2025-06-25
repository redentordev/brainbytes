import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

export const {
  useSession,
  signIn,
  signUp,
  signOut,
  forgetPassword,
  resetPassword,
  getSession,
} = authClient;

export const signInWithGoogle = async () =>
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/chat",
  });

export const signInWithGitHub = async () =>
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/chat",
  });

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;

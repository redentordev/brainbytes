import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

export const {
  useSession,
  signIn,
  signUp,
  signOut,
  forgetPassword,
  resetPassword,
  getSession,
} = authClient;

export const signInWithGitHub = async (callbackURL = "/chat") =>
  await authClient.signIn.social({
    provider: "github",
    callbackURL,
  });

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;

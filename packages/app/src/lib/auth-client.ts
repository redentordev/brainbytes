import { createAuthClient } from "better-auth/react";

const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_API_URL || "https://brainbytes.redentor.dev";
};

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
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

export const signInWithGitHub = async (callbackURL = "/chat") =>
  await authClient.signIn.social({
    provider: "github",
    callbackURL,
  });

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;

"use client";

import LoginForm from "@/components/chat/login-form";

export default function LoginPage() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return <LoginForm />;
}

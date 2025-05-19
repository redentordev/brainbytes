"use client";

import { useSession } from "@/lib/auth";
import { Navigate } from "react-router";

export default function HomePage() {
  const { data } = useSession();

  if (!data) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/chat" />;
}

"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { LearningMaterialsProvider } from "@/contexts/learning-material-context";
import { ThemeProvider } from "@/components/theme/theme-provider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <LearningMaterialsProvider>{children}</LearningMaterialsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

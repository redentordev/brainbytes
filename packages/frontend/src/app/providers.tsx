"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { LearningMaterialsProvider } from "@/contexts/learning-material-context";
import { authClient } from "@/lib/auth";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutes
          },
        },
      })
  );

  // Set up fetch interceptor for API requests
  React.useEffect(() => {
    // Store original fetch
    const originalFetch = window.fetch;

    // Create a fetch wrapper that includes credentials
    const fetchWithCredentials = async (
      input: RequestInfo | URL,
      init?: RequestInit
    ): Promise<Response> => {
      return originalFetch(input, {
        ...init,
        credentials: "include", // This sends cookies with the request
        headers: {
          ...init?.headers,
          "Content-Type": "application/json",
        },
      });
    };

    // Create a new fetch function that adds credentials for our API
    const enhancedFetch = async (
      input: RequestInfo | URL,
      init?: RequestInit
    ) => {
      // Get the URL string regardless of input type
      const url =
        typeof input === "string"
          ? input
          : input instanceof URL
            ? input.toString()
            : input.url;

      // Only add credentials for our API endpoints
      if (url.includes("localhost:3001/api")) {
        return fetchWithCredentials(input, init);
      }

      // Use original fetch for other requests
      return originalFetch(input, init);
    };

    // Override global fetch only if not in SSR
    if (typeof window !== "undefined") {
      // @ts-ignore - TypeScript doesn't like us modifying window.fetch
      window.fetch = enhancedFetch;
    }

    // Restore original fetch on cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.fetch = originalFetch;
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LearningMaterialsProvider>{children}</LearningMaterialsProvider>
    </QueryClientProvider>
  );
}

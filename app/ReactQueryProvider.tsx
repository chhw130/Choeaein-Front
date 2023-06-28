"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useState } from "react";
import { toast } from "react-toastify";

const queryErrorHandler = (error: unknown) => {
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  toast(title, { toastId: 1, theme: "dark" });
};

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: queryErrorHandler,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
          mutations: {
            onError: queryErrorHandler,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

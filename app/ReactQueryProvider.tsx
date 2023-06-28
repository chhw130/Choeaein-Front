"use client";

import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { PropsWithChildren, useState } from "react";

const QueryClientProvider = dynamic(() =>
  import("@tanstack/react-query").then((mod) => mod.QueryClientProvider)
);

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // onError: queryErrorHandler,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
          },
          mutations: {
            // onError: queryErrorHandler,
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

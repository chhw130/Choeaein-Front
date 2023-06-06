// app/providers.tsx
"use client";

import theme from "@/UI/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

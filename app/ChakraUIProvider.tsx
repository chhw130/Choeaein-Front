"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ColorModeScript,
  ThemeConfig,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
);

export function Providers({ children }: { children: React.ReactNode }) {
  const [mount, setMounted] = useState<boolean>(false);

  const { colorMode } = useColorMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  const config: ThemeConfig = {
    initialColorMode: colorMode,
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  );
}

"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript, ThemeConfig, extendTheme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
);

export function Providers({ children }: { children: React.ReactNode }) {
  const [initColor, setInitColor] = useState<string | null>("");

  useEffect(() => {
    const themeColor = localStorage.getItem("chakra-ui-color-mode");
    setInitColor(themeColor);
  }, []);

  const config: ThemeConfig = {
    initialColorMode: initColor,
    useSystemColorMode: true,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  );
}

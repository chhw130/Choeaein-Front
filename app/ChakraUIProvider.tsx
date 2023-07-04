"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ColorModeScript, ThemeConfig, extendTheme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const ChakraProvider = dynamic(() =>
  import("@chakra-ui/provider").then((mod) => mod.ChakraProvider)
);
import localFont from "next/font/local";
import { useLayoutEffect, useState } from "react";

const BMJUA = localFont({
  src: [
    {
      path: "./font/BMJUA_ttf.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

export function Providers({ children }: { children: React.ReactNode }) {
  const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const [mount, setMount] = useState(false);

  useLayoutEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }

  const theme = extendTheme({
    config,
    fonts: {
      body: BMJUA.style.fontFamily,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  );
}

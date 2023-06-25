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

import { Roboto, Noto_Sans_KR, Homemade_Apple } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "400", "700"],
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

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

  const theme = extendTheme({
    config,
    fonts: {
      body: homemadeApple.style.fontFamily,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  );
}

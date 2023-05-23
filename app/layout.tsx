"use client";
import { ChakraProvider } from "@chakra-ui/react";
import ReactQueryProvider from "./ReactQueryProvider";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import DefaultLayout from "./DefaultLayout";
import { Providers } from "./ChakraUIProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ width: "100%" }}>
      <body>
        <ReactQueryProvider>
          <Providers>
            <DefaultLayout>{children}</DefaultLayout>
          </Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

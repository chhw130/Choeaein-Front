"use client";
import { ChakraProvider } from "@chakra-ui/react";
import ReactQueryProvider from "./ReactQueryProvider";
import DefaultLayout from "./DefaultLayout";
import { Providers } from "./ChakraUIProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ReactQueryProvider>
            <Providers>
              <DefaultLayout>{children}</DefaultLayout>
            </Providers>
          </ReactQueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

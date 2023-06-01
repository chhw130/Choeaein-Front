"use client";
import "./globals.scss";
import { Cherry_Cream_Soda, Inter, Roboto, Work_Sans } from "next/font/google";

import ReactQueryProvider from "./ReactQueryProvider";
import DefaultLayout from "./DefaultLayout";
import { Providers } from "./ChakraUIProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react";
import { Metadata } from "next";
config.autoAddCss = false;

const roboto = Roboto({
  weight: ["400"],
  // style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      // className={roboto.className}
      >
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

"use client";
import { ChakraProvider } from "@chakra-ui/react";
import ReactQueryProvider from "./ReactQueryProvider";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import RootStyleRegistry from "./RootStyle";
import DefaultLayout from "./DefaultLayout";
// import styled from "styled-components";
// const Div = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <RootStyleRegistry>
            <ChakraProvider>
              <DefaultLayout>{children}</DefaultLayout>
            </ChakraProvider>
          </RootStyleRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

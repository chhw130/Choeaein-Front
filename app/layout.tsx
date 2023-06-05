import ReactQueryProvider from "./ReactQueryProvider";
import DefaultLayout from "./DefaultLayout";
import { Providers } from "./ChakraUIProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../app/global.scss";
import { Metadata } from "next";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Myfavor",
  description: "최애의 스케줄을 확인하세요.",
  icons: {
    icon: "/img/logo_main.png",
    shortcut: "/img/logo_main.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

import ReactQueryProvider from "../component/proivderComponent/ReactQueryProvider";
import DefaultLayout from "./DefaultLayout";
import { Providers } from "../component/proivderComponent/ChakraUIProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import RecoilProvider from "../component/proivderComponent/RecoilProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "최애인",
  description: "최애의 스케줄을 확인하세요.",
  icons: {
    icon: "https://example.com/icon.png",
    apple: "https://example.com/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100vh" }} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ReactQueryProvider>
          <RecoilProvider>
            <Providers>
              <DefaultLayout>{children}</DefaultLayout>
            </Providers>
          </RecoilProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

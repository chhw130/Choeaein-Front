import ReactQueryProvider from "./ReactQueryProvider";
import DefaultLayout from "../UI/Footer/DefaultLayout";
import { Providers } from "./ChakraUIProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";
import RecoilProvider from "./RecoilProvider";

export const metadata: Metadata = {
  title: "Myfavor",
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
    <html lang="en" suppressHydrationWarning>
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

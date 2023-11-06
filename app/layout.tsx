import ReactQueryProvider from "../component/proivderComponent/ReactQueryProvider";
import DefaultLayout from "./DefaultLayout";
import { Providers } from "../component/proivderComponent/ChakraUIProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import RecoilProvider from "../component/proivderComponent/RecoilProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.choeaein.click/"),
  title: "최애인",
  description: "최애의 스케줄을 확인하세요 !!",
  openGraph: {
    title: "최애인",
    description: "최애의 스케줄을 확인하세요 !!",
    url: "https://www.choeaein.click/",
    siteName: "choeaein",
    images: [
      {
        url: "/MainLogo.png",
        width: 800,
        height: 600,
      },
      {
        url: "/MainLogo.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100vh" }} suppressHydrationWarning>
      <meta
        name="google-site-verification"
        content="gYcNBMByGyryPu6Sb-eDJP1_pUTNnXKAZlbhF5ITj84"
      />
      <meta
        name="naver-site-verification"
        content="f9186a89fa693d6d0865950927b0b184ee1b94f9"
      />

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

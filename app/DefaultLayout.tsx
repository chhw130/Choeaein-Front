"use client";
import Footer from "@/component/organisms/Footer/Footer";
import Header from "@/component/organisms/Header/Header";
import { usePathname } from "next/navigation";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const url = usePathname();
  const isAdminPage = url?.includes("admin");

  return (
    <>
      {true ? (
        <>
          <Header />
          {children}
          {!isAdminPage && <Footer />}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default DefaultLayout;

"use client";
import Footer from "@/UI/Footer/Footer";
import Header from "@/UI/Headar/Header";
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
        <div>{children}</div>
      )}
    </>
  );
};

export default DefaultLayout;

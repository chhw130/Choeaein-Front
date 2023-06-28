"use client";
import Footer from "@/UI/Footer/Footer";
import Header from "@/UI/Headar/Header";
import useUser from "@/utils/hook/useUser";
import { useEffect, useState } from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const {} = useUser();

  return (
    <>
      {true ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default DefaultLayout;

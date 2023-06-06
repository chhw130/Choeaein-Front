import Footer from "@/UI/Footer/Footer";
import Header from "@/UI/Headar/Header";
import React, { Children } from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {true ? (
        <>
          <Header />
          {children}
          {/* <Footer /> */}
        </>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default DefaultLayout;

import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
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

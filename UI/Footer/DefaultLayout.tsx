"use client";
import Footer from "@/UI/Footer/Footer";
import Header from "@/UI/Headar/Header";

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

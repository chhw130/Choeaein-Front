"use client";
import Footer from "@/UI/Footer/Footer";
import Header from "@/UI/Headar/Header";
import { getUserInform } from "@/utils/axios/AxiosSetting";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  // const { data: userData } = useQuery(["me"], () => getUserInform());

  // console.log(userData);

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

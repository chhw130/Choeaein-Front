"use client";
import Footer from "@/UI/Footer/Footer";
import Header from "@/UI/Headar/Header";
import { getUserInform } from "@/utils/axios/AxiosSetting";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: userData = {} } = useQuery(["me"], () => getUserInform());

  console.log(userData);

  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }

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

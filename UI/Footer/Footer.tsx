"use client";
import { Flex, VStack, useColorMode } from "@chakra-ui/react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      pos={"absolute"}
      padding="80px"
      bg={
        colorMode === "light" ? "linear-gradient(#fccec0, #f89598)" : "#171923"
      }
      w="100%"
      spacing={2}
      alignItems="flex-start"
    >
      <Image
        src="https://velog.velcdn.com/images/view_coding/post/b0d48523-f2f5-4319-be6f-1784d4457a54/image.png"
        alt="logo"
        width={200}
        height={200}
        style={{ width: "auto", height: "auto" }}
      />

      <div className={styles.footerSns}>
        <h1>더욱 다양한 최애인을 만나보세요!</h1>
        <div className={styles.footerSns_image}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.footerMade}></div>
    </VStack>
  );
};
export default Footer;

"use client";
import FooterLogo from "@/component/atoms/Logo/FooterLogo";
import TextAtom from "@/component/atoms/Text/TextAtom";
import { VStack, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      padding="60px"
      as={"footer"}
      bg={
        colorMode === "light" ? "linear-gradient(#fccec0, #f89598)" : "#171923"
      }
      w="100%"
      h={"350px"}
      spacing={2}
      alignItems="flex-start"
    >
      <FooterLogo />
      <TextAtom fontSize={"25px"} color={"white"}>
        더욱 다양한 아이돌을 만나보세요!
      </TextAtom>
    </VStack>
  );
};
export default Footer;

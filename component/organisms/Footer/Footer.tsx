"use client";
import FooterLogo from "@/component/atoms/Logo/FooterLogo";
import TextAtom from "@/component/atoms/Text/TextAtom";
import { VStack, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
    marginTop={"16rem"}
      padding={"5rem 5rem 18rem 5rem" }
      as={"footer"}
      bg={
        colorMode === "light" ? "linear-gradient(#fccec0, #f89598)" : "#171923"
      }
      w="100%"
      h={"auto"}
      spacing={2}
      bottom={"0"}
      position={"static"}
      alignItems="flex-start"
    >
      <FooterLogo />
      <TextAtom fontSize={"1em"} color={"white"}>
        더욱 다양한 아이돌을 만나보세요!
      </TextAtom>
    </VStack>
  );
};
export default Footer;

"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import MainLogo from "@/component/atoms/Logo/MainLogo";
import Navigation from "@/component/molecules/Navigation/Navigation";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        as={"header"}
        position="fixed"
        w="100%"
        justifyContent="space-between"
        display="flex"
        zIndex={20}
        height="4rem"
        bg={colorMode !== "dark" ? "white" : "black"}
        alignItems={"center"}
        padding={["0px", "15px", "15px"]}
      >
        <MainLogo fontSize={[15, 15, 20]} width={20} height={20} />
        <Navigation />
      </Flex>
    </>
  );
};
export default Header;

import { HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import HeaderBtn from "@/UI/Headar/HeaderBtn";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      spacing={[1, 1, 3]}
      width={["70%", "50%", "80%"]}
      maxW={["300px", "400px", "500px"]}
      minW={["100px", "300px", "500px"]}
    >
      <SearchBar />
      <ButtonAtom
        size={["sm", "sm", "md"]}
        onClick={toggleColorMode}
        color={colorMode === "light" ? "black" : "white"}
      >
        {colorMode !== "light" ? <MoonIcon /> : <SunIcon />}
      </ButtonAtom>
      <HeaderBtn />
    </HStack>
  );
};

export default Navigation;

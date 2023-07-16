"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const ThemeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      size={["sm", "sm", "md"]}
      onClick={toggleColorMode}
      color={colorMode === "light" ? "black" : "white"}
    >
      {colorMode !== "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeBtn;

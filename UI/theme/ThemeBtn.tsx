"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [mount, setMounted] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onClick={toggleColorMode}
      color={colorMode === "light" ? "black" : "white"}
    >
      {colorMode !== "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeBtn;

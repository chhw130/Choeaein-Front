"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ThemeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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

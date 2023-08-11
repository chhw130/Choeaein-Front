"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import FindPassword from "../findPage/findPassword/FindPassword";

const FindPasswordTemplate = () => {
  return (
    <Box as="main" paddingTop={"4rem"} h={"100vh"}>
      <FindPassword />
    </Box>
  );
};

export default FindPasswordTemplate;

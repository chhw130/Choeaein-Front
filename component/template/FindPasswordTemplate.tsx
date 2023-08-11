"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import FindPasswordSection from "../organisms/Section/FindPasswordSection";

const FindPasswordTemplate = () => {
  return (
    <Box as="main" paddingTop={"4rem"} h={"100vh"}>
      <FindPasswordSection />
    </Box>
  );
};

export default FindPasswordTemplate;

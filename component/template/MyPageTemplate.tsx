"use client";
import React from "react";
import EditUserContainer from "../myPage/EditUserContainer";
import { Box } from "@chakra-ui/react";

const MyPageTemplate = () => {
  return (
    <Box as="main">
      <EditUserContainer />
    </Box>
  );
};

export default MyPageTemplate;

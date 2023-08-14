"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import TextAtom from "../atoms/Text/TextAtom";
import EditUserTabs from "../organisms/Tabs/EditUserTaps";

const MyPageTemplate = () => {
  return (
    <Box as="main" padding={"6rem 0"}>
      <Box
        as="section"
        w={["90%", "80%", "60%"]}
        maxW={"700px"}
        margin="0 auto"
      >
        <TextAtom fontSize={["20px", "25px", "30px"]} fontWeight="800">
          마이페이지
        </TextAtom>
        <EditUserTabs />
      </Box>
    </Box>
  );
};

export default MyPageTemplate;

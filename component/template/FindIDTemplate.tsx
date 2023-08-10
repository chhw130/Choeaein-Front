"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import FindIDForm from "../organisms/Section/FindIDFormSection";
import useFindID from "@/utils/hook/useFindID";
import IDInformSection from "../organisms/Section/IDInformSection";

const FindIDTemplate = () => {
  const { findIdHandler, idData } = useFindID();

  return (
    <Box as="main" paddingTop={"4rem"} h={"100vh"}>
      <FindIDForm findIdHandler={findIdHandler} />
      <IDInformSection idData={idData} />
    </Box>
  );
};

export default FindIDTemplate;

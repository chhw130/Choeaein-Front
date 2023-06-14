"use client";
import { Box } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const PageTitle = () => {
  const search = useSearchParams();
  const keyword = search?.get("keyword");
  return (
    <>
      <Box fontSize="30px">{keyword}로 검색한 결과</Box>
    </>
  );
};

export default PageTitle;

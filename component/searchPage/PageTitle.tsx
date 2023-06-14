"use client";
import { SearchPageParams } from "@/app/search/[keyword]/page";
import { Box } from "@chakra-ui/react";
import React from "react";

const PageTitle = ({ params }: SearchPageParams) => {
  const keyword = params.keyword;
  return (
    <>
      <Box fontSize="30px">{keyword}로 검색한 결과</Box>
    </>
  );
};

export default PageTitle;

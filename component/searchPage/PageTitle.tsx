"use client";
import { Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React from "react";

const PageTitle = () => {
  const search = useSearchParams();
  const keyword = search?.get("keyword");

  return (
    <>
      <Text fontSize="30px">{keyword}로 검색한 결과</Text>
    </>
  );
};

export default PageTitle;

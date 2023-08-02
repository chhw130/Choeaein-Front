"use client";
import { Box } from "@chakra-ui/react";
import PageTitle from "./PageTitle";
import dynamic from "next/dynamic";

const SearchPageContents = dynamic(() => import("./SearchPageContents"));

const SearchPageContainer = () => {
  return (
    <Box
      as={"section"}
      minH={"100vh"}
      width={"80%"}
      display={"flex"}
      flexDir={"column"}
      padding={"7rem 0"}
      margin={"0 100px"}
    >
      <PageTitle />
      <SearchPageContents />
    </Box>
  );
};

export default SearchPageContainer;

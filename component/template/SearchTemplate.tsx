"use client";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const SearchPageContents = dynamic(
  () => import("../organisms/Section/SearchSection")
);

const SearchPageContainer = () => {
  return (
    <Box
      as={"main"}
      minH={"100vh"}
      w={"80%"}
      display={"flex"}
      flexDir={"column"}
      padding={"7rem 0"}
      margin={"0 10%"}
    >
      <SearchPageContents />
    </Box>
  );
};

export default SearchPageContainer;

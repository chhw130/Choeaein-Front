"use client";
import { Box } from "@chakra-ui/react";
import PageTitle from "./PageTitle";
import { useSearchParams } from "next/navigation";
import useSearchData from "@/utils/hook/useSearchData";
import dynamic from "next/dynamic";

const SearchPageContents = dynamic(() => import("./SearchPageContents"));

const SearchPageContainer = () => {
  const search = useSearchParams();
  const keyword = search?.get("keyword");

  const { searchData, isLoading } = useSearchData(keyword);

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
      <SearchPageContents searchData={searchData} isLoading={isLoading} />
    </Box>
  );
};

export default SearchPageContainer;

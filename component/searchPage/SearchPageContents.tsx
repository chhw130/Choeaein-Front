"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MemberCard from "../../UI/Card/MemberCard";
import { UseSearchDataType } from "@/utils/hook/useSearchData";
import SpinnerUI from "@/UI/Spinner/SpinnerUI";

const SearchPageContents = ({ searchData, isLoading }: UseSearchDataType) => {
  return (
    <Flex
      width={"90%"}
      justifyContent={"space-around"}
      alignItems={"center"}
      wrap={"wrap"}
      as={"article"}
      margin={"3rem auto"}
      pos={"relative"}
    >
      {isLoading ? (
        <SpinnerUI />
      ) : searchData ? (
        searchData?.map((data: any) => {
          return <MemberCard key={data.idol_name_kr} data={data} />;
        })
      ) : (
        <Box>검색 결과가 없습니다.</Box>
      )}
    </Flex>
  );
};

export default SearchPageContents;

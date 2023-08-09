"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MemberCard from "../../molecules/Idol/MemberCard";
import useSearchData from "@/utils/hook/useSearchData";
import SpinnerUI from "@/component/atoms/Spinner/SpinnerUI";
import { useSearchParams } from "next/navigation";
import TextAtom from "../../atoms/Text/TextAtom";

const SearchPageContents = () => {
  const search = useSearchParams();
  const keyword = search?.get("keyword");

  const { searchData, isLoading } = useSearchData(keyword);

  return (
    <>
      <TextAtom fontSize="30px">{keyword}로 검색한 결과</TextAtom>
      <Flex
        width={"90%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        wrap={"wrap"}
        as={"section"}
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
          <TextAtom>검색 결과가 없습니다.</TextAtom>
        )}
      </Flex>
    </>
  );
};

export default SearchPageContents;

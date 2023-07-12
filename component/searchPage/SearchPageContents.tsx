import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MemberCard from "../../UI/Card/MemberCard";

const SearchPageContents = ({ searchData }: any) => {
  return (
    <Flex
      width={"90%"}
      justifyContent={"space-around"}
      alignItems={"center"}
      gap={"30px 4%"}
      wrap={"wrap"}
      as={"article"}
      margin={"3rem auto"}
    >
      {searchData ? (
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

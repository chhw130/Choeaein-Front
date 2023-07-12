import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MemberCard from "../../UI/Card/MemberCard";

const SearchPageContents = ({ searchData }: any) => {
  return (
    <Flex
      width={"80%"}
      justifyContent={"space-around"}
      gap={"30px 4%"}
      wrap={"wrap"}
      as={"article"}
      margin={"1rem auto"}
    >
      {searchData?.map((data: any) => {
        return <MemberCard key={data.idol_name_kr} data={data} />;
      })}
    </Flex>
  );
};

export default SearchPageContents;

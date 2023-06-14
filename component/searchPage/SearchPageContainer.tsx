"use client";
import { Container } from "@chakra-ui/react";
import React from "react";
import PageTitle from "./PageTitle";
import { SearchPageParams } from "@/app/search/[keyword]/page";
import SearchPageContents from "./SearchPageContents";

const SearchPageContainer = ({ params }: SearchPageParams) => {
  return (
    <Container
      h="100vh"
      display={"flex"}
      flexDir={"column"}
      paddingTop={100}
      margin={"0 100px"}
    >
      <PageTitle params={params} />
      <SearchPageContents />
    </Container>
  );
};

export default SearchPageContainer;

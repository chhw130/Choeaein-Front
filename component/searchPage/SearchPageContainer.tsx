"use client";
import { Container } from "@chakra-ui/react";
import React from "react";
import PageTitle from "./PageTitle";
import SearchPageContents from "./SearchPageContents";

const SearchPageContainer = () => {
  return (
    <Container
      h="100vh"
      display={"flex"}
      flexDir={"column"}
      paddingTop={100}
      margin={"0 100px"}
    >
      <PageTitle />
      <SearchPageContents />
    </Container>
  );
};

export default SearchPageContainer;

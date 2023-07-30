"use client";
import React from "react";
import {
  Button,
  Heading,
  HStack,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChoeIdolType } from "@/utils/interface/interface";
import MemberCard from "@/UI/Card/MemberCard";

interface NotFoundPageProps {
  idolRankData: ChoeIdolType[];
}

const NotFoundPage = ({ idolRankData }: NotFoundPageProps) => {
  const color = useColorMode().colorMode;
  const router = useRouter();

  return (
    <HStack
      as={"main"}
      bg="white"
      justifyContent="space-evenly"
      minH="100vh"
      paddingTop={"10rem"}
      paddingBottom={"3rem"}
      bgColor={
        color === "light" ? "white" : "var(--chakra-colors-chakra-body-bg);"
      }
      width={"80%"}
      margin={"0 auto"}
    >
      <VStack
        h={"100vh"}
        alignItems={"HStack-start"}
        position={"relative"}
        spacing="10"
      >
        <Button
          onClick={() => router.replace("/")}
          right={0}
          pos={"relative"}
          size={"lg"}
          position="relative"
          variant={"solid"}
          bg={"gray.400"}
        >
          &larr; Go Home
        </Button>
        <VStack spacing={10}>
          <Heading size={"2xl"}>
            죄송합니다. 해당 페이지를 찾을 수 없습니다.
          </Heading>
          <Heading size={"lg"}>요즘 떠오르는 아이돌들을 살펴보세요.</Heading>
          <HStack
            as={"section"}
            w={"100%"}
            wrap={"wrap"}
            justifyContent={"center"}
          >
            {idolRankData?.map((rankData) => (
              <MemberCard data={rankData} />
            ))}
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default NotFoundPage;

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
import MemberCard from "@/component/molecules/Idol/MemberCard";
import ButtonAtom from "../atoms/Button/ButtonAtom";

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
      paddingTop={"5rem"}
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
        <ButtonAtom
          onClick={() => router.replace("/")}
          right={0}
          pos={"relative"}
          position="relative"
          variant={"solid"}
          bg={"gray.400"}
          w={"100px"}
        >
          &larr; Go Home
        </ButtonAtom>
        <VStack spacing={10}>
          <Heading size={"2xl"}>
            죄송합니다. 해당 페이지를 찾을 수 없습니다.
          </Heading>
          <Heading size={"lg"}>요즘 떠오르는 아이돌들을 살펴보세요.</Heading>
          <HStack
            as={"section"}
            w={"80%"}
            marginTop={"3rem"}
            wrap={"wrap"}
            justifyContent="space-between"
          >
            {idolRankData?.map((rankData) => (
              <MemberCard key={rankData.pk} data={rankData} />
            ))}
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default NotFoundPage;

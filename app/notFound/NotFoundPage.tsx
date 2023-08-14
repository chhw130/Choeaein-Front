"use client";
import React from "react";
import { HStack, useColorMode, VStack } from "@chakra-ui/react";
import { ChoeIdolType } from "@/utils/interface/interface";
import MemberInfo from "../../component/molecules/Idol/MemberInfo";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface NotFoundPageProps {
  idolRankData: ChoeIdolType[];
}

const NotFoundPage = ({ idolRankData }: NotFoundPageProps) => {
  const color = useColorMode().colorMode;

  return (
    <HStack
      as={"section"}
      bg="white"
      justifyContent="space-evenly"
      bgColor={
        color === "light" ? "white" : "var(--chakra-colors-chakra-body-bg);"
      }
      width={"90%"}
      margin={"0 auto"}
    >
      <VStack alignItems={"HStack-start"} position={"relative"} spacing="10">
        <VStack spacing={4}>
          <TextAtom fontSize={["40px"]}>
            죄송합니다. 해당 페이지를 찾을 수 없습니다.
          </TextAtom>
          <TextAtom fontSize={"4xl"}>
            요즘 떠오르는 아이돌들을 살펴보세요.
          </TextAtom>
          <HStack
            as={"article"}
            w={"80%"}
            marginTop={"3rem"}
            wrap={"wrap"}
            justifyContent="space-between"
          >
            {idolRankData?.map((rankData) => (
              <MemberInfo key={rankData.pk} data={rankData} />
            ))}
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default NotFoundPage;

"use client";
import React from "react";
import { Center, HStack } from "@chakra-ui/react";
import { ChoeIdolType } from "@/utils/interface/interface";
import MemberInfo from "../../molecules/Idol/MemberInfo";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface NotFoundPageProps {
  idolRankData: ChoeIdolType[];
  isSoloPage? : boolean
}

const RankIdolSection = ({ idolRankData, isSoloPage }: NotFoundPageProps) => {
  return (
    <>
     <Center
     as="section"
     w={"80%"}
     maxW={"1300px"}
     flexDir={"column"}
     margin={"0 auto"}
   >
     <TextAtom fontSize={["lg", "2xl", "3xl"]} margin={"50px 0"}>
      {isSoloPage && "다른" } 아이돌 스케줄 보러가기
     </TextAtom>

     <HStack
       alignItems={"center"}
       wrap={"wrap"}
       justifyContent={"space-around"}
       w={"100%"}
       h={"100%"}
     >
       {idolRankData?.map((data) => {
         return <MemberInfo data={data} key={data.idol_name_kr} />;
       })}
     </HStack>
   </Center>
   </>
  );
};

export default RankIdolSection

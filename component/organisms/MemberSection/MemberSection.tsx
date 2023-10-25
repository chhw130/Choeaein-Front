"use client";
import TextAtom from "@/component/atoms/Text/TextAtom";
import MemberCard from "@/component/molecules/Idol/MemberInfo";
import { GroupType } from "@/utils/interface/interface";
import { Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const MemberSection = ({ groupMemberData }: { groupMemberData: GroupType }) => {
  const member = groupMemberData?.member;
  return (
    <Center
      as="section"
      w={"80%"}
      maxW={"1300px"}
      flexDir={"column"}
      margin={"0 auto"}
      marginBottom={"3rem"}
    >
      <TextAtom fontSize={["xl", "2xl", "3xl"]} margin={"50px 0"}>
        아이돌 스케줄 보러가기
      </TextAtom>

      <HStack
        alignItems={"center"}
        wrap={"wrap"}
        justifyContent={"space-around"}
        w={"100%"}
        h={"100%"}
      >
        {member?.map((data) => {
          return <MemberCard data={data} key={data.idol_name_kr} />;
        })}
      </HStack>
    </Center>
  );
};

export default MemberSection;

"use client";
import MemberCard from "@/UI/Card/MemberCard";
import { GroupType } from "@/utils/interface/interface";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const MemberSection = ({ groupMemberData }: { groupMemberData: GroupType }) => {
  const member = groupMemberData.member;

  return (
    <Center
      as="section"
      w={"90%"}
      flexDir={"column"}
      margin={"0 auto"}
      marginTop={"30px"}
    >
      <Text fontSize={"3xl"}>아이돌 스케줄 보러가기</Text>

      <HStack
        flexDir={"row"}
        margin={"0 auto"}
        wrap={"wrap"}
        justifyContent={"space-around"}
      >
        {member.map((data) => {
          return <MemberCard data={data} key={data.idol_name_kr} />;
        })}
      </HStack>
    </Center>
  );
};

export default MemberSection;

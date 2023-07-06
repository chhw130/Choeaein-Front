"use client";
import MemberCard from "@/UI/Card/MemberCard";
import { GroupType } from "@/utils/interface/interface";
import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const MemberSection = ({ groupMemberData }: { groupMemberData: GroupType }) => {
  const member = groupMemberData.member;

  return (
    <Center as="section" w={"80%"} flexDir={"column"} margin={"30px auto"}>
      <Text fontSize={["xl", "2xl", "3xl"]} margin={"50px 0"}>
        아이돌 스케줄 보러가기
      </Text>

      <HStack margin={"0 auto"} wrap={"wrap"} justifyContent={"space-around"}>
        {member.map((data) => {
          return <MemberCard data={data} key={data.idol_name_kr} />;
        })}
      </HStack>
    </Center>
  );
};

export default MemberSection;

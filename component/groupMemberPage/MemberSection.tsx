"use client";
import IdolCard from "@/UI/Card/IdolCard";
import { GroupType } from "@/utils/interface/interface";
import { HStack } from "@chakra-ui/react";
import React from "react";

const MemberSection = ({ groupMemberData }: { groupMemberData: GroupType }) => {
  const member = groupMemberData.member;
  return (
    <HStack
      as="section"
      w={"50%"}
      flexDir={"row"}
      margin={"0 auto"}
      wrap={"wrap"}
      justifyContent={"space-around"}
    >
      {member.map((data) => {
        return <IdolCard data={data} />;
      })}
    </HStack>
  );
};

export default MemberSection;

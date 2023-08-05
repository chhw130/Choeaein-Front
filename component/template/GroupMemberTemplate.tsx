"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import MemberSection from "../organisms/MemberSection/MemberSection";
import { GroupType, albumType } from "@/utils/interface/interface";
import IdolInfoCard from "../organisms/Card/IdolInfoCard";

export interface GroupMemberTemplateProps {
  albumData: albumType[];
  groupMemberData?: GroupType;
}

const GroupMemberTemplate = ({
  groupMemberData,
  albumData,
}: GroupMemberTemplateProps) => {
  return (
    <Flex paddingTop={"5rem"} flexDir={"column"}>
      <IdolInfoCard idolData={groupMemberData} albumData={albumData} />
      <MemberSection groupMemberData={groupMemberData} />
    </Flex>
  );
};

export default GroupMemberTemplate;

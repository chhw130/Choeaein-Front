"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import MemberSection from "../organisms/MemberSection/MemberSection";
import { GroupType, AlbumType } from "@/utils/interface/interface";
import IdolInfoCard from "../organisms/Card/IdolInfoCard";

export interface GroupMemberTemplateProps {
  albumData: AlbumType[];
  groupMemberData: GroupType;
}

const GroupMemberTemplate = ({
  groupMemberData,
  albumData,
}: GroupMemberTemplateProps) => {
  return (
    <Flex as={"main"} paddingTop={"5rem"} flexDir={"column"}>
      <IdolInfoCard
        albumData={albumData}
        profile={groupMemberData.group_profile}
        name={groupMemberData.groupname}
        debut={groupMemberData.group_debut}
        instaLink={groupMemberData.group_insta}
        youtubeLink={groupMemberData.group_youtube}
        enter={groupMemberData.enter}
      />
      <MemberSection groupMemberData={groupMemberData} />
    </Flex>
  );
};

export default GroupMemberTemplate;

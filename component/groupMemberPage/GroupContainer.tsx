"use client";
import DescriptionCard from "@/UI/Card/DescriptionCard";
import { GroupType } from "@/utils/interface/interface";
import { Center, Flex } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";

export interface GroupContainerProps {
  groupMemberData: GroupType;
  albumData: any;
}

const GroupContainer = ({
  groupMemberData,
  albumData,
}: GroupContainerProps) => {
  if (!groupMemberData.pk) return notFound();

  return (
    <Flex
      paddingTop={"3rem"}
      flexDir={"column"}
      margin={"0 auto"}
      as={"section"}
    >
      <Center paddingTop={10} flexDir={["column", "column", "row"]}>
        <DescriptionCard
          groupMemberData={groupMemberData}
          albumData={albumData}
        />
      </Center>
    </Flex>
  );
};

export default GroupContainer;

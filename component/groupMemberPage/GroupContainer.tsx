"use client";
import DescriptionCard from "@/UI/Card/DescriptionCard";
import { GroupType } from "@/utils/interface/interface";
import { Center, Flex } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";

const GroupContainer = ({
  groupMemberData,
}: {
  groupMemberData: GroupType;
}) => {
  if (!groupMemberData.pk) return notFound();

  return (
    <Flex
      paddingTop={"3rem"}
      flexDir={"column"}
      margin={"0 auto"}
      as={"section"}
    >
      <Center paddingTop={10} flexDir={["column", "column", "row"]}>
        <DescriptionCard groupMemberData={groupMemberData} />
      </Center>
    </Flex>
  );
};

export default GroupContainer;

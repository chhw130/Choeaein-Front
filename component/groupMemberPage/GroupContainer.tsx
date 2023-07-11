"use client";
import DescriptionCard from "@/UI/Card/DescriptionCard";
import {
  GroupType,
  IdolAlbumType,
  SoloType,
} from "@/utils/interface/interface";
import { Center, Flex } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";

export interface GroupContainerProps {
  albumData: IdolAlbumType;
  groupMemberData?: GroupType;
  soloData?: SoloType;
}

const GroupContainer = ({ albumData, ...rest }: GroupContainerProps) => {
  const idolData = rest?.groupMemberData || rest?.soloData;

  if (idolData?.pk) return notFound();

  return (
    <Flex
      paddingTop={"3rem"}
      flexDir={"column"}
      margin={"0 auto"}
      as={"section"}
    >
      <Center paddingTop={10} flexDir={["column", "column", "row"]}>
        <DescriptionCard idolData={idolData} albumData={albumData} />
      </Center>
    </Flex>
  );
};

export default GroupContainer;

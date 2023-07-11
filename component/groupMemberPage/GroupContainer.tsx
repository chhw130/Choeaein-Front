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
  idolData: any;
}

const GroupContainer = ({ albumData, idolData }: GroupContainerProps) => {
  if (!idolData?.pk) return notFound();

  return (
    <Flex
      padding={!idolData?.member ? "7rem 0" : "3rem 0 1rem 0"}
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

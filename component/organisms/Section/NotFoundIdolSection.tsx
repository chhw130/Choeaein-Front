"use client";
import React from "react";
import { HStack } from "@chakra-ui/react";
import { ChoeIdolType } from "@/utils/interface/interface";
import MemberInfo from "../../molecules/Idol/MemberInfo";

interface NotFoundPageProps {
  idolRankData: ChoeIdolType[];
}

const NotFoundIdolSection = ({ idolRankData }: NotFoundPageProps) => {
  return (
    <HStack
      as={"article"}
      w={"73%"}
      margin={"3rem auto"}
      wrap={"wrap"}
      justifyContent="space-between"
    >
      {idolRankData?.map((rankData) => (
        <MemberInfo key={rankData.pk} data={rankData} />
      ))}
    </HStack>
  );
};

export default NotFoundIdolSection;

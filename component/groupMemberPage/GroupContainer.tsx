"use client";
import DescriptionCard from "@/UI/Card/DescriptionCard";
import { GroupType } from "@/utils/interface/interface";
import { Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
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
      padding={"3rem"}
      flexDir={"column"}
      width={"100%"}
      margin={"0 auto"}
      as={"section"}
    >
      <Center padding={10}>
        {groupMemberData?.group_profile && (
          <Image
            src={groupMemberData?.group_profile}
            alt="아티스트 이미지"
            width={10000}
            height={10000}
            style={{
              objectFit: "cover",
              aspectRatio: "2.5/2",
              width: "40%",
              margin: "0 50px",
              objectPosition: "center",
              cursor: "pointer",
            }}
          />
        )}
        <DescriptionCard groupMemberData={groupMemberData} />
      </Center>
    </Flex>
  );
};

export default GroupContainer;

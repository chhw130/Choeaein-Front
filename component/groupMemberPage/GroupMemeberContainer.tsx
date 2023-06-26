"use client";
import DescriptionCard from "@/UI/Card/DescriptionCard";
import useGroupMember from "@/utils/hook/useGroupMember";
import { Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const GroupMemeberContainer = () => {
  const search = useSearchParams();
  const group = search?.get("group");

  const { isLoading, groupMemberData } = useGroupMember(group);

  return (
    <Flex
      h="100vh"
      padding={"3rem"}
      flexDir={"column"}
      width={"100%"}
      margin={"0 auto"}
    >
      <Center padding={10}>
        {groupMemberData?.group_profile && (
          <Image
            src={groupMemberData?.group_profile}
            alt="아티스트 이미지"
            width={1000}
            height={1000}
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
        <DescriptionCard />
      </Center>
    </Flex>
  );
};

export default GroupMemeberContainer;

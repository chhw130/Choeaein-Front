"use client";
import DescriptionCard from "@/UI/Card/DescriptionCard";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const GroupMemeberContainer = () => {
  const search = useSearchParams();
  const group = search?.get("group");
  return (
    <Flex
      h="100vh"
      padding={"3rem"}
      flexDir={"column"}
      width={"100%"}
      margin={"0 auto"}
    >
      <Center padding={10}>
        <Image
          src={"https://images8.alphacoders.com/118/1183043.jpg"}
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
        <DescriptionCard />
      </Center>
    </Flex>
  );
};

export default GroupMemeberContainer;

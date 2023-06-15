"use client";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const GroupMemeberContainer = () => {
  return (
    <Flex
      h="100vh"
      padding={"4rem"}
      flexDir={"column"}
      width={"90%"}
      margin={"0 auto"}
    >
      <Box padding={10}>
        <Center flexDir={"column"}>
          <Image
            src={"https://images8.alphacoders.com/118/1183043.jpg"}
            alt="아티스트 이미지"
            width={1000}
            height={1000}
            style={{
              borderRadius: "20%",
              objectFit: "cover",
              height: "250px",
              width: "250px",
              margin: "0 auto",
              objectPosition: "center",
              cursor: "pointer",
            }}
            loading="lazy"
          />
          <Text
            paddingTop={"20px"}
            margin={0}
            fontSize="1.6vw"
            letterSpacing="-0.19px"
            cursor={"pointer"}
            fontWeight={"bold"}
          >
            에스파
          </Text>
        </Center>
      </Box>
    </Flex>
  );
};

export default GroupMemeberContainer;

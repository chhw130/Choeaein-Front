"use client";
import React from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import EditUserImg from "./EditUserImg";
import ModifyPick from "./UI/ModifyPick";
import ModifyPassword from "./UI/ModifyPassword";
import ModifyNickname from "./UI/ModfiyNickname";

const EditUser = () => {
  return (
    <Box marginTop="30px" h="600px">
      <EditUserImg />
      <hr />
      <VStack
        padding="30px 0"
        margin=" 0 auto"
        fontSize={["12px", "13px", "15px"]}
        spacing={6}
      >
        <ModifyPick />
        <Flex justifyContent="space-between" width="80%" height="40px">
          <HStack spacing={5}>
            <Text w="60px" fontWeight={"bold"}>
              아이디
            </Text>
            <Text>{"email"}</Text>
          </HStack>
        </Flex>
        <ModifyPassword />
        <ModifyNickname />
      </VStack>
    </Box>
  );
};

export default EditUser;

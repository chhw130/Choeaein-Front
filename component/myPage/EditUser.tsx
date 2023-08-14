"use client";
import React from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import EditUserImg from "./EditUserImg";
import ModifyPick from "./UI/ModifyPick";
import ModifyPassword from "./UI/ModifyPassword";
import ModifyNickname from "./UI/ModfiyNickname";
import useUser from "@/utils/hook/useUser";
import TextAtom from "../atoms/Text/TextAtom";

const EditUser = () => {
  const { userData } = useUser();

  return (
    <Box as="article" marginTop="30px" h="600px">
      <EditUserImg />
      <hr />
      <VStack
        padding="30px 0"
        margin=" 0 auto"
        fontSize={["12px", "13px", "15px"]}
        spacing={6}
      >
        <ModifyPick userData={userData} />
        <Flex justifyContent="space-between" width="80%" height="40px">
          <HStack spacing={5}>
            <TextAtom w="70px" fontWeight={"bold"} fontSize={"lg"}>
              아이디
            </TextAtom>
            <TextAtom>{userData?.email}</TextAtom>
          </HStack>
        </Flex>
        <ModifyPassword />
        <ModifyNickname />
      </VStack>
    </Box>
  );
};

export default EditUser;

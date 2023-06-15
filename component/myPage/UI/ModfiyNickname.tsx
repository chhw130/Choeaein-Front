"use client";
import ModifyNicknameModal from "@/UI/Modal/ModifyNicknameModal";
import { Button, Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";

const ModifyNickname = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <ModifyNicknameModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" width="80%" height="40px">
        <HStack spacing={5}>
          <Text w={"60px"} fontWeight={"bold"}>
            별명
          </Text>
          <Text>nickname</Text>
        </HStack>
        <Button onClick={onOpen}>수정</Button>
      </Flex>
    </>
  );
};

export default ModifyNickname;

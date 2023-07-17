"use client";
import ModifyPasswordModal from "@/UI/Modal/ModifyPasswordModal";
import useUser from "@/utils/hook/useUser";
import { Button, Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const ModifyPassword = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <ModifyPasswordModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" width="80%" height="40px">
        <HStack spacing={5}>
          <Text w={"60px"} fontWeight={"bold"}>
            비밀번호
          </Text>
          <Text>***********</Text>
        </HStack>
        <Button onClick={onOpen}>수정</Button>
      </Flex>
    </>
  );
};

export default ModifyPassword;

"use client";
import TextAtom from "@/component/atoms/Text/TextAtom";
// import ModifyNicknameModal from "@/UI/Modal/ModifyNicknameModal";
import useUser from "@/utils/hook/useUser";
import { Button, Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";

const ModifyNicknameModal = dynamic(
  () => import("@/UI/Modal/ModifyNicknameModal")
);

const ModifyNickname = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { userData } = useUser();

  return (
    <>
      <ModifyNicknameModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" width="80%" height="40px">
        <HStack spacing={5}>
          <TextAtom w={"70px"} fontWeight={"bold"} fontSize={"lg"}>
            별명
          </TextAtom>
          <TextAtom>{userData?.nickname}</TextAtom>
        </HStack>
        <Button onClick={onOpen}>수정</Button>
      </Flex>
    </>
  );
};

export default ModifyNickname;

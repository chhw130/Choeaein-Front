"use client";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import TextAtom from "@/component/atoms/Text/TextAtom";
// import ModifyPasswordModal from "@/UI/Modal/ModifyPasswordModal";
import { Button, Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";

const ModifyPasswordModal = dynamic(
  () => import("@/UI/Modal/ModifyPasswordModal")
);

const EditPassword = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <ModifyPasswordModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" width="80%" height="40px">
        <HStack spacing={5}>
          <TextAtom w={"70px"} fontWeight={"bold"} fontSize={"lg"}>
            비밀번호
          </TextAtom>
          <TextAtom>***********</TextAtom>
        </HStack>
        <ButtonAtom onClick={onOpen}>수정</ButtonAtom>
      </Flex>
    </>
  );
};

export default EditPassword;

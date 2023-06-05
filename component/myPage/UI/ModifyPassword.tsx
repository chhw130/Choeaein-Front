"use client";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const ModifyPassword = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const modifyPasswordHandler = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>비밀번호 수정하기</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(modifyPasswordHandler)}>
            <ModalBody>
              <FormLabel margin={0} htmlFor="password">
                기존 비밀번호
              </FormLabel>
              <Input
                id="password"
                type="password"
                autoComplete="off"
                margin="10px 0"
                {...register("password", {
                  required: {
                    value: true,
                    message: "필수 정보입니다.",
                  },
                })}
              />
              <FormLabel margin={0} htmlFor="newPassword">
                새 비밀번호
              </FormLabel>
              <Input
                id="newPassword"
                type="password"
                margin="10px 0"
                autoComplete="off"
                {...register("newPassword", {
                  required: {
                    value: true,
                    message: "필수 정보입니다.",
                  },
                })}
              />
              <FormLabel margin={0} htmlFor="confirmNewPassword">
                비밀번호 확인
              </FormLabel>
              <Input
                id="confirmNewPassword"
                type="password"
                margin="10px 0"
                autoComplete="off"
                {...register("confirmNewPassword", {
                  required: {
                    value: true,
                    message: "필수 정보입니다.",
                  },
                })}
              />
            </ModalBody>
            <ModalFooter>
              <Button type="submit">수정하기</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Flex justifyContent="space-between" width="80%" height="40px">
        <HStack spacing={5}>
          <Text w={"60px"}>비밀번호</Text>
          <Text>***********</Text>
        </HStack>
        <Button onClick={onOpen}>수정</Button>
      </Flex>
    </>
  );
};

export default ModifyPassword;

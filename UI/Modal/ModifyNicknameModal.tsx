"use client";
import React from "react";
import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ModalProps } from "./ViewDayCalendarModal";
import { useForm } from "react-hook-form";

const ModifyNicknameModal = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const modifyPasswordHandler = (data: any) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>닉네임 변경하기</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(modifyPasswordHandler)}>
          <ModalBody>
            <FormLabel margin={0} htmlFor="nickname">
              새 닉네임
            </FormLabel>
            <Input
              id="nickname"
              type="password"
              margin="10px 0"
              {...register("password", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit">변경하기</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModifyNicknameModal;

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

interface ModifyPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModifyPasswordModal = ({ isOpen, onClose }: ModifyPasswordModalProps) => {
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
  );
};

export default ModifyPasswordModal;

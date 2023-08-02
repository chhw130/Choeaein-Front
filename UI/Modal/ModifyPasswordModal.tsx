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
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { putUserPassword } from "@/utils/API/CSRSetting";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface ModifyPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PasswordFormType {
  old_password: string;
  new_password: string;
  confirmNew_password?: string;
}

const ModifyPasswordModal = ({ isOpen, onClose }: ModifyPasswordModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordFormType>();

  const { colorMode } = useColorMode();

  const { mutateAsync: putUserPasswordHandler } = useMutation(
    (data: PasswordFormType) => putUserPassword(data),
    {
      onSuccess: () => {
        return toast("변경되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: "changePassword",
        });
      },
      onError: (err: AxiosError) => {
        const errData = err.response?.data;
        // const errMsg = errData?.message;
        return toast("에러", {
          type: "error",
          theme: colorMode,
          autoClose: 2000,
          toastId: "changePassword",
        });
      },
    }
  );

  const PasswordFormSubmitHandler = async (form: PasswordFormType) => {
    const data: PasswordFormType = {
      old_password: form.old_password,
      new_password: form.new_password,
    };

    await putUserPasswordHandler(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>비밀번호 수정하기</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(PasswordFormSubmitHandler)}>
          <ModalBody>
            <FormLabel margin={0} htmlFor="password">
              기존 비밀번호
            </FormLabel>
            <Input
              fontFamily={"heading"}
              id="password"
              type="password"
              autoComplete="off"
              margin="10px 0"
              {...register("old_password", {
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
              fontFamily={"heading"}
              id="newPassword"
              type="password"
              margin="10px 0"
              autoComplete="off"
              {...register("new_password", {
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
              fontFamily={"heading"}
              id="confirmNewPassword"
              type="password"
              margin="10px 0"
              autoComplete="off"
              {...register("confirmNew_password", {
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

import React from "react";
import {
  Button,
  FormLabel,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Modal,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ModalProps } from "./ViewDayCalendarModal";
import IdolOption from "@/component/singupPage/IdolOption";

const ModifyPickModal = ({ isOpen, onClose }: ModalProps) => {
  const modifyPickHandler = () => {};
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>비밀번호 수정하기</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(modifyPickHandler)}>
          <ModalBody>
            <FormLabel margin={0} htmlFor="password">
              아이돌
            </FormLabel>
            <Select>
              <IdolOption />
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">수정하기</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModifyPickModal;

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
import IdolOption from "@/UI/Select/IdolOption";

const ModifyPickModal = ({ isOpen, onClose }: ModalProps) => {
  const modifyPickHandler = () => {};
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>최애 변경하기</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(modifyPickHandler)}>
          <ModalBody>
            <Select placeholder="최애를 선택해주세요.">
              <IdolOption />
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">변경하기</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModifyPickModal;

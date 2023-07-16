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
import IdolOption from "@/UI/Select/IdolOption";
import { useMutation } from "@tanstack/react-query";
import { putUserPick } from "@/utils/API/CSRSetting";

interface ModifyPickModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModifyPickModal = ({ isOpen, onClose }: ModifyPickModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ pick: string }>();

  const { mutateAsync: userPickHandler } = useMutation((data) =>
    putUserPick(data)
  );

  const modifyPickHandler = async (data: any) => {
    await userPickHandler(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>최애 변경하기</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(modifyPickHandler)}>
          <ModalBody>
            <Select
              placeholder="최애를 선택해주세요."
              {...register("pick", {
                required: true,
              })}
            >
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

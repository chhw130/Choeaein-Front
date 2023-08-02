import React from "react";
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Modal,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import IdolOption from "@/UI/Select/IdolOption";
import { useMutation } from "@tanstack/react-query";
import { putUserPick } from "@/utils/API/CSRSetting";
import { toast } from "react-toastify";

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

  const { colorMode } = useColorMode();

  const { mutateAsync: userPickHandler } = useMutation(
    (data) => putUserPick(data),
    {
      onSuccess: () => {
        return toast("변경되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: "changePick",
        });
      },
      onError: () => {
        return toast("변경에 실패했습니다.", {
          type: "error",
          theme: colorMode,
          autoClose: 2000,
          toastId: "changePick",
        });
      },
    }
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
        <Box as="form" onSubmit={handleSubmit(modifyPickHandler)}>
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
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default ModifyPickModal;

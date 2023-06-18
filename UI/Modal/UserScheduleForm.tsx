import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ModalProps } from "./ViewDayCalendarModal";
import { useForm } from "react-hook-form";

interface UserScheduleForm {
  schedule: string;
  date: string;
}

const UserScheduleForm = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserScheduleForm>();

  const submitHandler = () => {
    console.log(1);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>내 일정 등록하기</Text>
        </ModalHeader>
        <ModalCloseButton />
        <Container as={"form"} onSubmit={handleSubmit(submitHandler)}>
          <ModalBody>
            <Center padding={5}>
              <FormControl>
                <FormLabel htmlFor="schedule">일정</FormLabel>
                <Input
                  id="schedule"
                  {...register("schedule", {
                    required: "일정을 입력해주세요.",
                  })}
                />
                {errors.schedule && (
                  <Text textAlign={"right"} color={"#bf1650"} fontSize={"xs"}>
                    ⚠ {errors?.schedule.message}
                  </Text>
                )}
                <FormLabel htmlFor="date" marginTop={3}>
                  시간
                </FormLabel>
                <Input
                  type="date"
                  id="date"
                  {...register("date", {
                    required: "시간을 입력해주세요.",
                  })}
                />
                {errors.date && (
                  <Text textAlign={"right"} color={"#bf1650"} fontSize={"xs"}>
                    ⚠ {errors?.date.message}
                  </Text>
                )}
              </FormControl>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button type="submit">내 일정 추가하기</Button>
          </ModalFooter>
        </Container>
      </ModalContent>
    </Modal>
  );
};

export default UserScheduleForm;

import ModalOrganism from "@/component/organisms/Modal/ModalOrganism";
import {
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
import { useForm } from "react-hook-form";

interface UserScheduleForm {
  schedule: string;
  date: string;
}

interface UserScheduleFormType {
  isOpen: boolean;
  onClose: () => void;
}

const UserScheduleForm = ({ isOpen, onClose }: UserScheduleFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserScheduleForm>();

  const submitHandler = () => {
    console.log(1);
  };

  return (
    <ModalOrganism isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
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
    </ModalOrganism>
  );
};

export default UserScheduleForm;

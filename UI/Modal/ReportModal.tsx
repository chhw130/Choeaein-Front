import {
  Button,
  Container,
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
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ModalProps } from "./ViewDayCalendarModal";
import RadioCard from "../Card/RadioCard";

interface ReportForm {
  title: string;
  location: string;
  startDate: string;
  content: string;
}

const ReportModal = ({ isOpen, onClose }: ModalProps) => {
  const { register, handleSubmit } = useForm<ReportForm>();
  const categorys = ["방송", "발매", "구매", "축하", "행사"];

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "category",
    defaultValue: "방송",
  });

  const group = getRootProps();

  const submitHandler = (formData: ReportForm) => {
    const data = {
      category: value,
      title: formData.title,
      location: formData.location,
      startDate: formData.startDate,
      content: formData.content,
    };

    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>일정 제보하기</ModalHeader>
        <ModalCloseButton />
        <Container as={"form"} onSubmit={handleSubmit(submitHandler)}>
          <ModalBody>
            <FormLabel margin={0} htmlFor="category">
              카테고리
            </FormLabel>
            <HStack {...group}>
              {categorys.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>

            <FormLabel margin={0} htmlFor="title">
              일정 이름
            </FormLabel>
            <Input
              id="title"
              margin="10px 0"
              autoComplete="off"
              {...register("title", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
            <FormLabel margin={0} htmlFor="location">
              장소
            </FormLabel>
            <Input
              id="location"
              margin="10px 0"
              autoComplete="off"
              {...register("location", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
            <FormLabel margin={0} htmlFor="startDate">
              일정
            </FormLabel>
            <Input
              id="startDate"
              margin="10px 0"
              autoComplete="off"
              type="date"
              {...register("startDate", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
            <FormLabel margin={0} htmlFor="content">
              상세 내용
            </FormLabel>
            <Input
              id="content"
              margin="10px 0"
              autoComplete="off"
              {...register("content", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit">제보하기</Button>
          </ModalFooter>
        </Container>
      </ModalContent>
    </Modal>
  );
};

export default ReportModal;

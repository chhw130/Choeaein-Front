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
  useColorMode,
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { ModalProps } from "./ViewDayCalendarModal";
import RadioCard from "../Card/RadioCard";
import { useMutation } from "@tanstack/react-query";
import { postUserReportSchedule } from "@/utils/API/CSRSetting";
import { ChoeIdolType } from "@/utils/interface/interface";
import { toast } from "react-toastify";

interface ReportModalProps extends ModalProps {
  idolData: ChoeIdolType;
}
interface ReportForm {
  title: string;
  location: string;
  startDate: string;
}

export interface PostDataType extends ReportForm {
  type: string | number;
  whoes: string[];
}

const ReportModal = ({ isOpen, onClose, idolData }: ReportModalProps) => {
  const { register, handleSubmit } = useForm<ReportForm>();
  const categorys = ["방송", "발매", "구매", "축하", "행사"];
  const { colorMode } = useColorMode();

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "category",
    defaultValue: "방송",
  });
  const group = getRootProps();

  const { mutateAsync: reportScheduleHandler } = useMutation(
    (data: PostDataType) => postUserReportSchedule(data),
    {
      onSuccess: () => {},
    }
  );

  const submitHandler = async (formData: ReportForm) => {
    const data: PostDataType = {
      whoes: [idolData.idol_name_kr],
      type: value,
      title: formData.title,
      location: formData.location,
      startDate: formData.startDate,
    };

    await reportScheduleHandler(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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

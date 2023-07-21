import React from "react";
import { PostDataType, ReportForm } from "./ReportModal";
import { useForm } from "react-hook-form";
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
import { ModalProps } from "./ViewDayCalendarModal";
import RadioCard from "../Card/RadioCard";
import { MypageReportSchedule } from "@/utils/interface/interface";

interface ReportEditModalProps extends ModalProps {
  reportData: MypageReportSchedule;
}

const ReportEditModal = ({
  isOpen,
  onClose,
  reportData,
}: ReportEditModalProps) => {
  const { register, handleSubmit } = useForm<ReportForm>();

  const categorys = ["broadcast", "release", "buy", "congrats", "행사"];

  const {
    getRootProps,
    getRadioProps,
    value: category,
  } = useRadioGroup({
    name: "category",
    defaultValue: reportData?.ScheduleType?.type,
  });
  const group = getRootProps();

  const submitHandler = async (formData: ReportForm) => {
    const data: PostDataType = {
      whoes: [""],
      ScheduleType: category,
      ScheduleTitle: formData.ScheduleTitle,
      location: formData.location,
      startDate: formData.startDate,
    };
    // await reportScheduleHandler(data);
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

            <FormLabel margin={0} htmlFor="ScheduleTitle">
              일정 이름
            </FormLabel>
            <Input
              id="ScheduleTitle"
              margin="10px 0"
              autoComplete="off"
              defaultValue={reportData?.ScheduleTitle}
              {...register("ScheduleTitle", {
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
              defaultValue={reportData?.location}
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
              defaultValue={reportData?.when}
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

export default ReportEditModal;

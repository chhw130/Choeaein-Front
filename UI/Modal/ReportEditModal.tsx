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
  useColorMode,
  useRadioGroup,
} from "@chakra-ui/react";
import { ModalProps } from "./ViewDayCalendarModal";
import RadioCard from "../Card/RadioCard";
import { MypageReportSchedule } from "@/utils/interface/interface";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putUserReportDetail } from "@/utils/API/CSRSetting";
import { toast } from "react-toastify";

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
  const { colorMode } = useColorMode();

  const {
    getRootProps,
    getRadioProps,
    value: category,
  } = useRadioGroup({
    name: "category",
    defaultValue: reportData?.ScheduleType?.type,
  });
  const group = getRootProps();

  const date: string = moment(reportData?.when).format("YYYY-MM-DD");

  const queryClient = useQueryClient();

  const { mutateAsync: putUserReportDetailHandler, isLoading } = useMutation(
    (formData: PostDataType) => putUserReportDetail(formData, reportData?.pk),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userReportSchedule"]);
        queryClient.invalidateQueries(["myReport"]);
        onClose();
        return toast("스케줄이 수정되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: 1,
        });
      },
    }
  );

  const submitHandler = async (formData: ReportForm) => {
    const data: PostDataType = {
      // whoes: [reportData?.whoes[0]],
      ScheduleType: category,
      ScheduleTitle: formData.ScheduleTitle,
      location: formData.location,
      when: formData.when,
    };
    await putUserReportDetailHandler(data);
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
            <FormLabel margin={0} htmlFor="when">
              일정
            </FormLabel>
            <Input
              id="when"
              margin="10px 0"
              autoComplete="off"
              type="date"
              defaultValue={date}
              {...register("when", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" isLoading={isLoading}>
              제보하기
            </Button>
          </ModalFooter>
        </Container>
      </ModalContent>
    </Modal>
  );
};

export default ReportEditModal;

import React from "react";
import { PostDataType, ReportForm } from "./ReportModal";
import { useForm } from "react-hook-form";
import {
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
import { MypageReportSchedule } from "@/utils/interface/interface";
import moment from "moment";

import { categoryData } from "@/utils/data/ClientData";
import CategoryRadioList from "../../component/molecules/List/CategoryRadioList";
import useReviseReportSchedule from "@/utils/hook/useReviseReportSchedule";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";

interface ReportEditModalProps extends ModalProps {
  reportData: MypageReportSchedule;
}

const ReportEditModal = ({
  isOpen,
  onClose,
  reportData,
}: ReportEditModalProps) => {
  const { register, handleSubmit } = useForm<ReportForm>();
  const reportPk = reportData?.pk;

  const { putUserReportDetailHandler, isLoading } = useReviseReportSchedule(
    onClose,
    reportPk
  );

  const {
    getRootProps,
    getRadioProps,
    value: category,
  } = useRadioGroup({
    name: "category",
    defaultValue: "방송",
  });
  const group = getRootProps();

  const date: string = moment(reportData?.when).format("YYYY-MM-DD");

  const submitHandler = async (formData: ReportForm) => {
    const ScheduleType = categoryData.find(
      (cate) => cate.content === category
    )?.category;

    const data: PostDataType = {
      ScheduleType,
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
              {categoryData.map((category) => {
                const value = category.content;
                const radio = getRadioProps({ value });
                return (
                  <CategoryRadioList
                    key={category.pk}
                    categoryBg={category.bg}
                    {...radio}
                  >
                    {value}
                  </CategoryRadioList>
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
            <ButtonAtom type="submit" isLoading={isLoading}>
              제보하기
            </ButtonAtom>
          </ModalFooter>
        </Container>
      </ModalContent>
    </Modal>
  );
};

export default ReportEditModal;

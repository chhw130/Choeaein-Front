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
import { ChoeIdolType } from "@/utils/interface/interface";
import { categoryData } from "@/utils/data/ClientData";
import CategoryRadioList from "../../component/molecules/List/CategoryRadioList";
import useReportSchedule from "@/utils/hook/useReportSchedule";

interface ReportModalProps extends ModalProps {
  idolData: ChoeIdolType;
}
export interface ReportForm {
  ScheduleTitle: string;
  location: string;
  when: string;
}

export interface PostDataType extends ReportForm {
  ScheduleType: string | undefined;
}

const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
  const { register, handleSubmit } = useForm<ReportForm>();
  const { reportScheduleHandler, isLoading } = useReportSchedule(onClose);

  const {
    getRootProps,
    getRadioProps,
    value: category,
  } = useRadioGroup({
    name: "category",
    defaultValue: "방송",
  });
  const group = getRootProps();

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
            <HStack as={"ul"} {...group}>
              {categoryData.map((category) => {
                const value = category.content;
                const radio = getRadioProps({ value });
                return (
                  <CategoryRadioList
                    key={category.pk}
                    {...radio}
                    categoryBg={category.bg}
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
              {...register("when", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              })}
            />
          </ModalBody>
          <ModalFooter>
            <Button isLoading={isLoading} type="submit">
              제보하기
            </Button>
          </ModalFooter>
        </Container>
      </ModalContent>
    </Modal>
  );
};

export default ReportModal;

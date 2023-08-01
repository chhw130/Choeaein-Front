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
export interface ReportForm {
  ScheduleTitle: string;
  location: string;
  when: string;
}

export interface PostDataType extends ReportForm {
  ScheduleType: string | number;
}

const ReportModal = ({ isOpen, onClose, idolData }: ReportModalProps) => {
  const { register, handleSubmit } = useForm<ReportForm>();
  const categorys = ["broadcast", "event", "release", "buy", "congrats"];
  const { colorMode } = useColorMode();

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "category",
    defaultValue: "broadcast",
  });
  const group = getRootProps();

  const { mutateAsync: reportScheduleHandler } = useMutation(
    (data: PostDataType) => postUserReportSchedule(data),
    {
      onSuccess: () => {
        onClose();
        return toast("일정이 제보되었습니다.", {
          type: "success",
          theme: colorMode,
          toastId: "report",
        });
      },
      onError: () => {
        return toast("잠시후 다시 시도해주세요.", {
          type: "error",
          theme: colorMode,
          toastId: "report",
        });
      },
    }
  );

  const submitHandler = async (formData: ReportForm) => {
    const data: PostDataType = {
      ScheduleType: value,
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
            <Button type="submit">제보하기</Button>
          </ModalFooter>
        </Container>
      </ModalContent>
    </Modal>
  );
};

export default ReportModal;

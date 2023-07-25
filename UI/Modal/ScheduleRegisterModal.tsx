import {
  Button,
  ButtonGroup,
  Center,
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
import {
  deleteUserReportSchedule,
  postUserReport,
} from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { useMutation } from "@tanstack/react-query";

interface ScheduleRegisterModalProps extends ModalProps {
  idolName: string;
  reportData: MypageReportSchedule;
}

const ScheduleRegisterModal = ({
  isOpen,
  onClose,
  idolName,
  reportData,
}: ScheduleRegisterModalProps) => {
  const { mutateAsync: postReportScheduleHandler } = useMutation(
    (reportData: MypageReportSchedule | any) =>
      postUserReport(idolName, reportData),
    {
      onError: () => {},
      onSuccess: async () => {
        await deleteUserReportSchedule(reportData.pk);
      },
    }
  );

  const newReportData = {
    ScheduleTitle: reportData.ScheduleTitle,
    ScheduleType: reportData.ScheduleType,
    location: reportData.location,
    when: reportData.when,
    participant: [{ idolName }],
  };

  const obj = {
    ScheduleTitle: "Perferendis commodi quam.",
    ScheduleType: {
      type: "congrats",
    },
    location: "케이아트 디딤홀",
    when: "2023-05-17T04:54:47",
  };

  console.log(reportData);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>일정 등록하기</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center padding={5} fontSize={"2xl"}>
            본 일정을 등록하시겠습니까?
          </Center>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              type="submit"
              onClick={async () => {
                await postReportScheduleHandler(newReportData);
              }}
            >
              일정 추가하기
            </Button>
            <Button type="submit" onClick={() => onClose()}>
              취소
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleRegisterModal;

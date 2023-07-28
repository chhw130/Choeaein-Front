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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface ScheduleRegisterModalProps extends ModalProps {
  reportData: MypageReportSchedule;
}

const ScheduleRegisterModal = ({
  isOpen,
  onClose,
  reportData,
}: ScheduleRegisterModalProps) => {
  const queryclinet = useQueryClient();

  const idolName = reportData?.whoes[0].split("(");

  const idolNameKR: string = idolName[1].slice(0, -1);

  const { mutateAsync: postReportScheduleHandler, isLoading } = useMutation(
    (reportData: MypageReportSchedule | any) =>
      postUserReport(idolNameKR, reportData),
    {
      onError: () => {
        toast("서버 에러", {
          type: "error",
        });
      },
      onSuccess: async () => {
        await deleteUserReportSchedule(reportData.pk);
        queryclinet.invalidateQueries([`userReportSchedule`]);
        onClose();
        return toast("일정이 성공적으로 업로드 되었습니다.", {
          type: "success",
        });
      },
    }
  );

  const newReportData = {
    owner: "관리자",
    ScheduleTitle: reportData.ScheduleTitle,
    ScheduleType: reportData.ScheduleType?.type,
    location: reportData.location,
    when: reportData.when,
    participant: [idolNameKR],
  };

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
              isLoading={isLoading}
              onClick={async () => {
                await postReportScheduleHandler(newReportData);
              }}
            >
              일정 추가하기
            </Button>
            <Button onClick={() => onClose()}>취소</Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleRegisterModal;

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
import { postUserReport } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface ScheduleRegisterModalProps extends ModalProps {
  reportData: MypageReportSchedule;
}

export interface ReportPkType {
  report_pk: number;
}

const ReportRegisterModal = ({
  isOpen,
  onClose,
  reportData,
}: ScheduleRegisterModalProps) => {
  const queryclinet = useQueryClient();

  const reportPk: ReportPkType = { report_pk: reportData?.pk };

  const { mutateAsync: postReportScheduleHandler, isLoading } = useMutation(
    (reportPk: ReportPkType) => postUserReport(reportPk),
    {
      onError: () => {
        toast("서버 에러", {
          type: "error",
        });
      },
      onSuccess: async () => {
        queryclinet.invalidateQueries([`userReportSchedule`]);
        onClose();
        return toast("일정이 성공적으로 업로드 되었습니다.", {
          type: "success",
        });
      },
    }
  );

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
                await postReportScheduleHandler(reportPk);
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

export default ReportRegisterModal;

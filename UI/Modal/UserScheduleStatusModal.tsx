import {
  ModalContent,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import React from "react";
import { ModalProps } from "./ViewDayCalendarModal";
import { MypageReportSchedule } from "@/utils/interface/interface";

interface UserScheduleStatusModalProps extends ModalProps {
  userReport: MypageReportSchedule;
}

const UserScheduleStatusModal = ({
  isOpen,
  onClose,
  userReport,
}: UserScheduleStatusModalProps) => {
  console.log(userReport);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{userReport?.ScheduleTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{userReport?.location}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserScheduleStatusModal;

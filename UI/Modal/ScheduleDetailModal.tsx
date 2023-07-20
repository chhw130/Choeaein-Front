import { IdolDateScheduleType } from "@/utils/interface/interface";
import {
  Box,
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
import moment from "moment";

interface ScheduleDetailModalProps extends ModalProps {
  idolDateSchedule: IdolDateScheduleType;
}

const ScheduleDetailModal = ({
  isOpen,
  onClose,
  idolDateSchedule,
}: ScheduleDetailModalProps) => {
  const date = moment(idolDateSchedule.when).format("YYYY.MM.DD. HH:MM");
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>{idolDateSchedule?.ScheduleTitle}</Text>
          <Text>{date}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>{idolDateSchedule?.location}</Box>
          <Box>{idolDateSchedule?.ScheduleType?.type}</Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleDetailModal;

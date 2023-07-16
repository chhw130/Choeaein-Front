import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import UserScheduleForm from "./UserScheduleForm";
import { IdolDateScheduleType } from "@/utils/interface/interface";
import moment from "moment";
import ScheduleDetailModal from "./ScheduleDetailModal";
import DateScheduleCard from "../Card/DateScheduleCard";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ViewDayCalendarModalProps extends ModalProps {
  selectedDay: moment.Moment;
  idolDateSchedules: IdolDateScheduleType[];
  dateLoading: boolean;
}

const ViewDayCalendarModal = ({
  isOpen,
  selectedDay,
  idolDateSchedules,
  dateLoading,
  onClose,
}: ViewDayCalendarModalProps) => {
  const selectDay: string = selectedDay.format("YYYY년 M월 D일");

  const {
    isOpen: isOpenUserScheduleForm,
    onClose: onCloseUserScheduleForm,
    onOpen,
  } = useDisclosure();

  return (
    <>
      <UserScheduleForm
        isOpen={isOpenUserScheduleForm}
        onClose={onCloseUserScheduleForm}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>{selectDay}</Text>
            <Text>스케줄을 놓치지마세요!</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!dateLoading ? (
              <Center padding={5}>
                {idolDateSchedules?.map(
                  (idolDateSchedule: IdolDateScheduleType) => (
                    <DateScheduleCard
                      key={idolDateSchedule.pk}
                      idolDateSchedule={idolDateSchedule}
                    />
                  )
                )}
              </Center>
            ) : (
              <div>loading</div>
            )}
            <hr />
            <Center padding={5}>
              <Button onClick={() => onOpen()}>내 일정 추가하기</Button>
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewDayCalendarModal;

import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import UserScheduleForm from "./UserScheduleForm";
import { IdolDateScheduleType } from "@/utils/interface/interface";
import moment from "moment";
import DateScheduleCard from "../Card/DateScheduleCard";
import ModalOrganism from "@/component/organisms/Modal/ModalOrganism";
import TextAtom from "@/component/atoms/Text/TextAtom";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";

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

      <ModalOrganism isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalHeader>
          <TextAtom>{selectDay}</TextAtom>
          <TextAtom>스케줄을 놓치지마세요!</TextAtom>
        </ModalHeader>
        <ModalBody>
          {!dateLoading ? (
            <VStack padding={3} flexDir={"column"} margin={" 0 auto"}>
              {idolDateSchedules.length !== 0 ? (
                <>
                  {idolDateSchedules?.map(
                    (idolDateSchedule: IdolDateScheduleType) => (
                      <DateScheduleCard
                        key={idolDateSchedule.pk}
                        idolDateSchedule={idolDateSchedule}
                      />
                    )
                  )}
                </>
              ) : (
                <TextAtom fontSize={"2xl"}>일정이 없습니다.</TextAtom>
              )}
            </VStack>
          ) : (
            <Center h={"100px"}>
              <Spinner />
            </Center>
          )}
          <hr />
          <Center padding={5}>
            <ButtonAtom onClick={() => onOpen()}>내 일정 추가하기</ButtonAtom>
          </Center>
        </ModalBody>
      </ModalOrganism>
    </>
  );
};

export default ViewDayCalendarModal;

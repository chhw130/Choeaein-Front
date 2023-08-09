import {
  Center,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IdolDateScheduleType } from "@/utils/interface/interface";
import moment from "moment";
import DateScheduleCard from "../Card/DateScheduleCard";
import ModalOrganism from "@/component/organisms/Modal/ModalOrganism";
import TextAtom from "@/component/atoms/Text/TextAtom";

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

  return (
    <>
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
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalOrganism>
    </>
  );
};

export default ViewDayCalendarModal;

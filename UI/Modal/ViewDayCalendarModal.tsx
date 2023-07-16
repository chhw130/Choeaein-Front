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
import useIdolDateSchedules from "@/utils/hook/useIdolDateSchedules";
import { ChoeIdolType } from "@/utils/interface/interface";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ViewDayCalendarModalProps extends ModalProps {
  selectedDay: any;
  idolDateSchedules: any;
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

  console.log(idolDateSchedules);

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
                <Box
                  bg={"white"}
                  color={"black"}
                  w={"300px"}
                  h={"60px"}
                  borderRadius={"10px"}
                >
                  schedule
                </Box>
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

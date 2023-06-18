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

export interface ModalProps {
  isOpen: boolean;
  selectedDay?: any;
  onClose: any;
}

const ViewDayCalendarModal = ({ isOpen, selectedDay, onClose }: ModalProps) => {
  const selectDay = selectedDay.format("YYYY년 M월 D일");

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

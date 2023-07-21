import {
  ModalContent,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ModalProps } from "./ViewDayCalendarModal";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@/utils/data/ClientData";
import moment from "moment";
import ReportEditModal from "./ReportEditModal";

interface UserScheduleStatusModalProps extends ModalProps {
  userReport: MypageReportSchedule;
}

const UserScheduleStatusModal = ({
  isOpen,
  onClose,
  userReport,
}: UserScheduleStatusModalProps) => {
  const category = userReport?.ScheduleType?.type;
  const date = moment(userReport?.when).format("YYYY-MM-DD HH시 MM분");

  const {
    isOpen: isOpenReportEdit,
    onClose: onCloseReportEdit,
    onOpen: onOpenReportEdit,
  } = useDisclosure();

  return (
    <>
      <ReportEditModal
        isOpen={isOpenReportEdit}
        onClose={onCloseReportEdit}
        reportData={userReport}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FontAwesomeIcon
              icon={icon[category as keyof typeof icon].icon}
              color={icon[category as keyof typeof icon].bg}
            />
            &nbsp;{userReport?.ScheduleTitle}
          </ModalHeader>
          <ModalBody>장소 : {userReport?.location}</ModalBody>
          <ModalBody>날짜 : {date}</ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button size={"sm"} onClick={() => onOpenReportEdit()}>
                수정하기
              </Button>
              <Button size={"sm"}>삭제하기</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserScheduleStatusModal;

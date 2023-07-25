import { MypageReportSchedule } from "@/utils/interface/interface";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiUserCheck } from "react-icons/fi";
import ScheduleRegisterModal from "../Modal/ScheduleRegisterModal";

const ReportScheduleEnrollBtn = ({
  reportData,
}: {
  reportData: MypageReportSchedule;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ScheduleRegisterModal
        isOpen={isOpen}
        onClose={onClose}
        reportData={reportData}
      />
      <Button onClick={() => onOpen()}>
        <FiUserCheck />
      </Button>
    </>
  );
};

export default ReportScheduleEnrollBtn;

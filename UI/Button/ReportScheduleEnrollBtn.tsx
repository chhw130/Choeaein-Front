import { MypageReportSchedule } from "@/utils/interface/interface";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { FiUserCheck } from "react-icons/fi";
import ScheduleRegisterModal from "../Modal/ScheduleRegisterModal";

const ReportScheduleEnrollBtn = ({
  reportData,
}: {
  reportData: MypageReportSchedule;
}) => {
  const enrollHandler = () => {};

  const { isOpen, onOpen, onClose } = useDisclosure();
  const idolName = reportData?.whoes[0].split("(");

  const name = idolName[1].slice(0, -1);
  console.log(reportData);

  return (
    <>
      <ScheduleRegisterModal
        isOpen={isOpen}
        onClose={onClose}
        idolName={name}
        reportData={reportData}
      />
      <Button onClick={() => onOpen()}>
        <FiUserCheck />
      </Button>
    </>
  );
};

export default ReportScheduleEnrollBtn;

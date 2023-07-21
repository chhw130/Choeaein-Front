import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import dynamic from "next/dynamic";
import { MypageReportSchedule } from "@/utils/interface/interface";
const ReportEditModal = dynamic(() => import("../Modal/ReportEditModal"));

const ReportScheduleEditBtn = ({
  reportData,
}: {
  reportData: MypageReportSchedule;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ReportEditModal
        isOpen={isOpen}
        onClose={onClose}
        reportData={reportData}
      />
      <Button onClick={() => onOpen()}>
        <FiEdit />
      </Button>
    </>
  );
};

export default ReportScheduleEditBtn;

import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import ReportScheduleEnrollBtn from "./ReportScheduleEnrollBtn";
import ReportScheduleDeleteBtn from "./ReportScheduleDeleteBtn";
import ReportScheduleEditBtn from "./ReportScheduleEditBtn";
import { MypageReportSchedule } from "@/utils/interface/interface";

const ReportScheduleBtn = ({ row }: any) => {
  const reportData: MypageReportSchedule = row?.original;
  console.log(reportData);
  return (
    <ButtonGroup>
      <ReportScheduleEnrollBtn reportData={reportData} />
      <ReportScheduleEditBtn reportData={reportData} />
      <ReportScheduleDeleteBtn reportData={reportData} />
    </ButtonGroup>
  );
};

export default ReportScheduleBtn;

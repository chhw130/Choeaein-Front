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
      {/* <ReportScheduleEnrollBtn value={value} /> */}
      <ReportScheduleEditBtn reportData={reportData} />
      {/* <ReportScheduleDeleteBtn value={value} /> */}
    </ButtonGroup>
  );
};

export default ReportScheduleBtn;

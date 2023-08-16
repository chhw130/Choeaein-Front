"use client";
import { MemberType } from "@/utils/interface/interface";
import React from "react";
import { Box } from "@chakra-ui/react";
import IdolList from "../organisms/Admin/IdolList";
import UserReportScheduleList from "../organisms/Admin/UserReportScheduleList";

interface AdminTemplateProps {
  path: string;
  idolData: MemberType;
}

const AdminTemplate = ({ path, idolData }: AdminTemplateProps) => {
  return (
    <Box as="main" paddingTop={"3.5rem"}>
      {path === "idols" ? (
        <IdolList idolData={idolData} />
      ) : path === "schedules" ? (
        <UserReportScheduleList />
      ) : null}
    </Box>
  );
};

export default AdminTemplate;

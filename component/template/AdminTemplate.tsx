"use client";
import { MemberType } from "@/utils/interface/interface";
import React from "react";
import IdolList from "../adminPage/IdolList";
import ReportSchedule from "../adminPage/ReportSchedule";
import { Box } from "@chakra-ui/react";

interface AdminTemplateProps {
  path: string;
  idolData: MemberType;
}

const AdminTemplate = ({ path, idolData }: AdminTemplateProps) => {
  return (
    <Box as="main">
      {path === "idols" ? (
        <IdolList idolData={idolData} />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </Box>
  );
};

export default AdminTemplate;

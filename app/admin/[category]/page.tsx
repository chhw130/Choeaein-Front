"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const IdolList = dynamic(
  () => import("@/component/adminPage/contents/IdolList")
);
const ReportSchedule = dynamic(
  () => import("@/component/adminPage/contents/ReportSchedule")
);

const AdminPage = async (params: any) => {
  const path = params.params.category;
  return (
    <Box margin="70px 0">
      {path === "idols" ? (
        <IdolList />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </Box>
  );
};

export default AdminPage;

"use client";
import React from "react";
import IdolList from "@/component/adminPage/contents/IdolList";
import ReportSchedule from "@/component/adminPage/contents/ReportSchedule";
import { Box } from "@chakra-ui/react";

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

"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const IdolList = dynamic(() => import("@/component/adminPage/IdolList"));
const ReportSchedule = dynamic(
  () => import("@/component/adminPage/ReportSchedule")
);

const AdminPage = async (params: any) => {
  const path = params.params.category;

  return (
    <Box as="section" margin="70px 0">
      {path === "idols" ? (
        <IdolList />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </Box>
  );
};

export default AdminPage;

"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
const IdolList = dynamic(() => import("@/component/adminPage/IdolList"));
const ReportSchedule = dynamic(
  () => import("@/component/adminPage/ReportSchedule")
);

const AdminPage = async (params: any) => {
  const path = params.params.category;

  return (
    <Box as="section" paddingTop={"4rem"}>
      {path === "idols" ? (
        <IdolList />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </Box>
  );
};

export default AdminPage;

"use client";
import { getMyReportSchedules } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { Box, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React from "react";

const ScheduleCard = dynamic(import("@/UI/Card/UserScheduleCard"));

const MyReportSchedule = () => {
  const { data: userReportData = [], isLoading } = useQuery([`myReport`], () =>
    getMyReportSchedules()
  );

  return (
    <Box h={"60vh"} alignItems={"center"}>
      {!isLoading ? (
        userReportData.map((userReport: MypageReportSchedule) => {
          return <ScheduleCard userReport={userReport} key={userReport.pk} />;
        })
      ) : (
        <Skeleton h={"100%"} />
      )}
    </Box>
  );
};

export default MyReportSchedule;

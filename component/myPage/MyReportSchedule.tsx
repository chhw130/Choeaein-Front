import DateScheduleCard from "@/UI/Card/DateScheduleCard";
import ScheduleCard from "@/UI/Card/UserScheduleCard";
import { getMyReportSchedules } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { Container } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyReportSchedule = () => {
  const { data: userReportData = [], isLoading } = useQuery([`myReport`], () =>
    getMyReportSchedules()
  );
  return (
    <Container>
      {userReportData.map((userReport: MypageReportSchedule) => {
        return <ScheduleCard userReport={userReport} key={userReport.pk} />;
      })}
    </Container>
  );
};

export default MyReportSchedule;

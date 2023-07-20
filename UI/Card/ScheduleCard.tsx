import { getMyReportSchedules } from "@/utils/API/CSRSetting";
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ScheduleCard = () => {
  const { data: userReportData = [] } = useQuery([`myReport`], () =>
    getMyReportSchedules()
  );

  console.log(userReportData);

  return (
    <Card>
      <CardBody>
        <Text>스케줄</Text>
      </CardBody>
    </Card>
  );
};

export default ScheduleCard;

"use client";
import React from "react";
import { Center, Text, VStack } from "@chakra-ui/react";
import useUpcomingSchedules from "@/utils/hook/useUpcomingSchedules";
import {
  ChoeIdolType,
  IdolDateScheduleType,
} from "@/utils/interface/interface";
import DateScheduleCard from "@/UI/Card/DateScheduleCard";

interface ComingScheduleProps {
  idolData: ChoeIdolType;
}

const ComingSchedule = ({ idolData }: ComingScheduleProps) => {
  const idolName = idolData.idol_name_en;

  const { data, isLoading } = useUpcomingSchedules(idolName);

  return (
    <Center flexDir="column" margin={30} width={"60%"} maxW={"700px"}>
      <Text fontSize="35px" fontWeight="bold">
        다가오는 스케줄
      </Text>
      <VStack margin={10} width={"100%"}>
        {data.map((data: IdolDateScheduleType, index: string) => (
          <DateScheduleCard key={index} idolDateSchedule={data} />
        ))}
      </VStack>
    </Center>
  );
};

export default ComingSchedule;

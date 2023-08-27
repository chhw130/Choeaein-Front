"use client";
import React from "react";
import { ChoeIdolType } from "@/utils/interface/interface";
import { VStack } from "@chakra-ui/react";
import useUser from "@/utils/hook/useUser";
import CalendarReportSection from "../molecules/ButtonGroup/CalendarReportSection";
import CalendarSection from "../organisms/Section/CalendarSection";
import ComingScheduleSection from "../organisms/Section/ComingScheduleSection";

const CalendarTemplate = ({ idolData }: { idolData: ChoeIdolType }) => {
  const { userData } = useUser();

  const isUserPick = userData?.pick;

  return (
    <VStack
      as={"main"}
      padding={"4.3rem 0"}
      justifyContent={"center"}
      spacing={5}
    >
      <CalendarSection idolData={idolData} />
      {isUserPick === idolData.pk && (
        <CalendarReportSection idolData={idolData} />
      )}
      <ComingScheduleSection idolData={idolData} />
    </VStack>
  );
};

export default CalendarTemplate;

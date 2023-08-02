"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ChoeIdolType } from "@/utils/interface/interface";
import { VStack } from "@chakra-ui/react";

const Calendar = dynamic(() => import("./Calendar"));
const ComingSchedule = dynamic(() => import("./ComingSchedule"));

const CalendarContainer = ({ idolData }: { idolData: ChoeIdolType }) => {
  return (
    <VStack
      padding={"4.3rem 0"}
      as="section"
      justifyContent={"center"}
      spacing={10}
    >
      <Calendar idolData={idolData} />
      <ComingSchedule idolData={idolData} />
    </VStack>
  );
};

export default CalendarContainer;

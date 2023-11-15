"use client";
import React from "react";
import MainVideo from "../organisms/Main/MainVideo";
import RandomSchedule from "../organisms/Main/RandomSchedule";
import IdolSection from "../organisms/Main/IdolSection";
import {
  IdolGroupType,
  IdolSoloType,
  RandomIdolSchedule,
} from "@/utils/interface/interface";
import { Box } from "@chakra-ui/react";

interface MainTemplateProps {
  idolGroupData: IdolGroupType[];
  idolSoloData: IdolSoloType[];
  randomSchedules: RandomIdolSchedule[];
}

const MainTemplate = ({
  idolGroupData,
  idolSoloData,
  randomSchedules,
}: MainTemplateProps) => {
  return (
    <Box as="main" padding={"4rem 0 0rem 0"}>
      <MainVideo />
      <RandomSchedule randomSchedules={randomSchedules} />
      <IdolSection idolGroupData={idolGroupData} idolSoloData={idolSoloData} />
    </Box>
  );
};

export default MainTemplate;

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
import { Box, Flex } from "@chakra-ui/react";

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
    <Box paddingTop={"4rem"}>
      <MainVideo />
      <RandomSchedule randomSchedules={randomSchedules} />
      <IdolSection idolGroupData={idolGroupData} idolSoloData={idolSoloData} />
    </Box>
  );
};

export default MainTemplate;

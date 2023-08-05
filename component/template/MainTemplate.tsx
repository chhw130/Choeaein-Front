import React from "react";
import MainVideo from "../organisms/Main/MainVideo";
import RandomSchedule from "../organisms/Main/RandomSchedule";
import IdolSection from "../organisms/Main/IdolSection";
import {
  IdolGroupType,
  IdolSoloType,
  RandomIdolSchedule,
} from "@/utils/interface/interface";

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
    <>
      <MainVideo />
      <RandomSchedule randomSchedules={randomSchedules} />
      <IdolSection idolGroupData={idolGroupData} idolSoloData={idolSoloData} />
    </>
  );
};

export default MainTemplate;

"use client";
import React from "react";
import IdolInfoCard from "../organisms/Card/IdolInfoCard";
import { Flex } from "@chakra-ui/react";
import { SoloType, albumType } from "@/utils/interface/interface";

interface SoloTemplateProps {
  soloData: SoloType;
  albumData: albumType[];
}

const SoloTemplate = ({ soloData, albumData }: SoloTemplateProps) => {
  return (
    <Flex paddingTop={"9rem"} flexDir={"column"} marginBottom={"6rem"}>
      <IdolInfoCard
        albumData={albumData}
        profile={soloData?.solo_profile}
        name={soloData?.idol_name_kr}
        debut={soloData.solo_debut}
        instaLink={soloData.solo_insta}
        youtubeLink={soloData.solo_youtube}
        enName={soloData.idol_name_en}
        enter={soloData.enter}
      />
    </Flex>
  );
};

export default SoloTemplate;

"use client";
import React from "react";
import IdolInfoCard from "../organisms/Card/IdolInfoCard";
import { Flex } from "@chakra-ui/react";
import { SoloType, AlbumType, ChoeIdolType } from "@/utils/interface/interface";
import RankIdolSection from "../organisms/Section/RankIdolSection";

interface SoloTemplateProps {
  soloData: SoloType;
  albumData: AlbumType[];
  idolRankData : ChoeIdolType[]
}

const SoloTemplate = ({ soloData, albumData, idolRankData }: SoloTemplateProps) => {
  return (
    <Flex
      as={"main"}
      flexDir={"column"}
      padding={["4rem 0 0 0", "4rem 0 0 0 ", "8rem 0 0 0"]}
    >
      <IdolInfoCard
        albumData={albumData}
        profile={soloData.solo_profile}
        name={soloData.idol_name_kr}
        debut={soloData.solo_debut}
        instaLink={soloData.solo_insta}
        youtubeLink={soloData.solo_youtube}
        enName={soloData.idol_name_en}
        enter={soloData.enter}
      />

<RankIdolSection idolRankData={idolRankData} isSoloPage={true} />

    </Flex>
  );
};

export default SoloTemplate;

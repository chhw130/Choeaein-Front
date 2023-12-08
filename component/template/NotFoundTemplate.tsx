"use client";
import { ChoeIdolType } from "@/utils/interface/interface";
import { Box } from "@chakra-ui/react";
import React from "react";
import NotFoundInfoSection from "../organisms/Section/NotFoundInfoSection";
import RankIdolSection from "@/component/organisms/Section/RankIdolSection";

interface NotFoundTemplateProps {
  idolRankData: ChoeIdolType[];
}

const NotFoundTemplate = ({ idolRankData }: NotFoundTemplateProps) => {
  return (
    <Box as="main" padding={"9rem  1rem 0 1rem"}>
      <NotFoundInfoSection />
      <RankIdolSection idolRankData={idolRankData} />
    </Box>
    //
  );
};

export default NotFoundTemplate;

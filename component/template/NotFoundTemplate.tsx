"use client";
import { ChoeIdolType } from "@/utils/interface/interface";
import { Box } from "@chakra-ui/react";
import React from "react";
import NotFoundInfoSection from "../organisms/Section/NotFoundInfoSection";
import NotFoundIdolSection from "@/component/organisms/Section/NotFoundIdolSection";

interface NotFoundTemplateProps {
  idolRankData: ChoeIdolType[];
}

const NotFoundTemplate = ({ idolRankData }: NotFoundTemplateProps) => {
  return (
    <Box as="main" padding={"9rem  1rem 0 1rem"}>
      <NotFoundInfoSection />
      <NotFoundIdolSection idolRankData={idolRankData} />
    </Box>
  );
};

export default NotFoundTemplate;

"use client";
import NotFoundPage from "@/app/notFound/NotFoundPage";
import { ChoeIdolType } from "@/utils/interface/interface";
import { Box } from "@chakra-ui/react";
import React from "react";

interface NotFoundTemplateProps {
  idolRankData: ChoeIdolType[];
}

const NotFoundTemplate = ({ idolRankData }: NotFoundTemplateProps) => {
  return (
    <Box as="main" padding={"8rem 0"} h={"100vh"}>
      <NotFoundPage idolRankData={idolRankData} />
    </Box>
  );
};

export default NotFoundTemplate;

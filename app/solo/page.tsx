import IdolInfoCard from "@/component/organisms/Card/IdolInfoCard";
import SoloTemplate from "@/component/template/SoloTemplate";
import { getIdolSolo, getIdolSoloAlbum } from "@/utils/API/SSGSetting";
import { SoloType, albumType } from "@/utils/interface/interface";
import React from "react";

interface SoloPageProps {
  searchParams: { idol: string };
}

const SoloPage = async ({ searchParams }: SoloPageProps) => {
  const idolName: string = searchParams.idol;

  const soloData: SoloType = await getIdolSolo(idolName);
  const albumData: albumType[] = await getIdolSoloAlbum(idolName);

  return <SoloTemplate soloData={soloData} albumData={albumData} />;
};

export default SoloPage;

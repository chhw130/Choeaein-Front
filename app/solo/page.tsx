import SoloTemplate from "@/component/template/SoloTemplate";
import { getIdolSolo, getIdolSoloAlbum } from "@/utils/API/SSGSetting";
import { SoloType, albumType } from "@/utils/interface/interface";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  searchParams,
}: any): Promise<Metadata> => {
  const idolName: string = searchParams.idol;
  const soloData: SoloType = await getIdolSolo(idolName);

  const idolNameKr = soloData.idol_name_kr;
  const idolProfile = soloData.solo_profile;

  return {
    openGraph: {
      title: `최애인`,
      description: `${idolNameKr} 스케줄을 확인해보세요!!`,
      images: [{ url: idolProfile }],
    },
  };
};
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

import GroupContainer from "@/component/groupMemberPage/GroupContainer";
import { getIdolMemberAlbum, getIdolSolo } from "@/utils/API/SSGSetting";
import { IdolAlbumType, SoloType } from "@/utils/interface/interface";
import React from "react";

interface SoloPageProps {
  searchParams: { idol: string };
}

const SoloPage = async ({ searchParams }: SoloPageProps) => {
  const idolName: string = searchParams.idol;

  const soloData: SoloType = await getIdolSolo(idolName);
  const albumData: IdolAlbumType = await getIdolMemberAlbum(idolName);

  return (
    <main>
      <GroupContainer idolData={soloData} albumData={albumData} />
    </main>
  );
};

export default SoloPage;

import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolGroups, getIdolSolos } from "@/utils/API/SSGSetting";

export interface IdolGroup {
  enter: string;
  group_profile: string;
  groupname: string;
}

export interface IdolSolo {
  enter: string;
  idol_name_en: string;
  idol_name_kr: string;
  solo_profile: string;
}

const fetchData = async () => {
  const idolGroupData: IdolGroup[] = await getIdolGroups();
  const idolSoloData = await getIdolSolos();

  return { idolGroupData, idolSoloData };
};

export default async function Home() {
  const schedulesData: [] = [];
  const { idolGroupData, idolSoloData } = await fetchData();

  return (
    <main>
      <MainVideo />
      <RandomSchedule schedulesData={schedulesData} />
      <IdolSection idolGroupData={idolGroupData} idolSoloData={idolSoloData} />
    </main>
  );
}

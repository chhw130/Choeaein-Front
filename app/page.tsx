import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolGroups, getIdolSolos } from "@/utils/API/SSGSetting";
import { IdolGroupType } from "@/utils/interface/interface";

const fetchData = async () => {
  const idolGroupData: IdolGroupType[] = await getIdolGroups();
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

import MainTemplate from "@/component/template/MainTemplate";
import {
  getIdolGroups,
  getIdolSolos,
  getRandomSchedules,
} from "@/utils/API/SSGSetting";
import {
  IdolGroupType,
  RandomIdolSchedule,
  SoloType,
} from "@/utils/interface/interface";

const fetchData = async () => {
  const idolGroupData: IdolGroupType[] = await getIdolGroups();
  const idolSoloData: SoloType[] = await getIdolSolos();
  const randomSchedules: RandomIdolSchedule[] = await getRandomSchedules();

  return { idolGroupData, idolSoloData, randomSchedules };
};

export default async function Home() {
  const { idolGroupData, idolSoloData, randomSchedules } = await fetchData();

  return (
    <MainTemplate
      idolGroupData={idolGroupData}
      idolSoloData={idolSoloData}
      randomSchedules={randomSchedules}
    />
  );
}

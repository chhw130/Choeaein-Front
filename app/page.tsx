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

export default async function Home() {
  const idolGroupData: IdolGroupType[] = await getIdolGroups();
  const idolSoloData: SoloType[] = await getIdolSolos();
  const randomSchedules: RandomIdolSchedule[] = await getRandomSchedules();

  return (
    <MainTemplate
      idolGroupData={idolGroupData}
      idolSoloData={idolSoloData}
      randomSchedules={randomSchedules}
    />
  );
}

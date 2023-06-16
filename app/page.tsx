import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolGroups, getIdolSchedules } from "@/utils/axios/AxiosSetting";

export interface IdolGroup {
  enter: string;
  group_profile: string;
  groupname: string;
}

export default async function Home() {
  const schedulesData = await getIdolSchedules();
  const idolGroupData: IdolGroup[] = await getIdolGroups();

  console.log(process.env.NEXT_PUBLIC_DEV_BASE_URL);

  return (
    <>
      <MainVideo />
      <RandomSchedule schedulesData={schedulesData} />
      <IdolSection idolGroupData={idolGroupData} />
    </>
  );
}

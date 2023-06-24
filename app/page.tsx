import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolGroups, getIdolList } from "@/utils/axios/AxiosSetting";
import useIdolGroups from "@/utils/hook/useIdolGroups";
import axios from "axios";

export interface IdolGroup {
  enter: string;
  group_profile: string;
  groupname: string;
}

export default async function Home() {
  const schedulesData: [] = [];
  const idolGroupData: IdolGroup[] = await getIdolGroups();

  return (
    <>
      <MainVideo />
      <RandomSchedule schedulesData={schedulesData} />
      <IdolSection idolGroupData={idolGroupData} />
    </>
  );
}

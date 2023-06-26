import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolGroups } from "@/utils/axios/AxiosSetting";

export interface IdolGroup {
  enter: string;
  group_profile: string;
  groupname: string;
}

const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_BASE_URL}/groups/`);
  const idolGroupData: IdolGroup[] = await res.json();
  return { idolGroupData };
};

export default async function Home() {
  const schedulesData: [] = [];
  const { idolGroupData } = await fetchData();

  return (
    <main>
      <MainVideo />
      <RandomSchedule schedulesData={schedulesData} />
      <IdolSection idolGroupData={idolGroupData} />
    </main>
  );
}

import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolList, getIdolSchedules } from "@/utils/axios/AxiosSetting";

export default async function Home() {
  const schedulesData = await getIdolSchedules();
  const idolData = await getIdolList();

  return (
    <>
      <MainVideo />
      <RandomSchedule schedulesData={schedulesData} />
      <IdolSection idolData={idolData} />
    </>
  );
}

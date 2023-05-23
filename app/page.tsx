"use client";
import styles from "./page.module.scss";

import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolList, getIdolSchedules } from "@/utils/axios/AxiosSetting";

export const dynamic = "force-dynamic";

export default async function Home() {
  const schedulesData = await getIdolSchedules();
  const idolData = await getIdolList();

  return (
    <>
      <MainVideo />
      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <RandomSchedule schedulesData={schedulesData} />
          <IdolSection idolData={idolData} />
        </div>
      </div>
    </>
  );
}

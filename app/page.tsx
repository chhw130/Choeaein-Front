"use client";
import styles from "./page.module.scss";

import IdolSection from "@/component/mainPage/IdolSection";
import MainVideo from "@/component/mainPage/MainVideo";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import { getIdolList, getIdolSchedules } from "@/utils/axios/AxiosSetting";

export default async function Home() {
  const { schedulesData, idolData } = await getData();

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

async function getData() {
  const schedulesData = await getIdolSchedules();
  const idolData = await getIdolList();

  return { schedulesData, idolData };
}

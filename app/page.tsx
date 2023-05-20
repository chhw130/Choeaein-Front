"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getIdolList, getIdolSchedules } from "@/utils/axios/AxiosSetting";

import Link from "next/link";
import IdolSection from "@/component/mainPage/IdolSection";
import RandomSchedule from "@/component/mainPage/RandomSchedule";
import MainVideo from "@/component/mainPage/MainVideo";

export default function Home() {
  return (
    <>
      <MainVideo />
      <div className={styles.home}>
        <div className={styles.homeContainer}>
          <RandomSchedule />
          <IdolSection />
        </div>
      </div>
    </>
  );
}

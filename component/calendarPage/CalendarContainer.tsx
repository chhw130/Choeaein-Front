"use client";
import React from "react";
import styles from "./CalendarPage.module.scss";
import dynamic from "next/dynamic";
import { ChoeIdolType } from "@/utils/interface/interface";

const ComingSchedule = dynamic(() => import("./ComingSchedule"));
const Calendar = dynamic(() => import("./Calendar"));

const CalendarContainer = ({ idolData }: { idolData: ChoeIdolType }) => {
  return (
    <section className={styles.calendarContainer}>
      <div className={styles.calendarWrap}>
        <Calendar idolData={idolData} />
      </div>
      <ComingSchedule idolData={idolData} />
    </section>
  );
};

export default CalendarContainer;

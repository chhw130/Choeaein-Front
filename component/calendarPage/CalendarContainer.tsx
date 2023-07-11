"use client";
import React from "react";
import styles from "./CalendarPage.module.scss";
import dynamic from "next/dynamic";

const ComingSchedule = dynamic(() => import("./ComingSchedule"));
const Calendar = dynamic(() => import("./Calendar"));

const CalendarContainer = ({ idolData }: any) => {
  return (
    <section className={styles.calendarContainer}>
      <div className={styles.calendarWrap}>
        <Calendar idolData={idolData} />
      </div>
      <ComingSchedule />
    </section>
  );
};

export default CalendarContainer;

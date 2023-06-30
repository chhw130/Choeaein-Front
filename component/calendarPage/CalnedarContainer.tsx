"use client";
import React from "react";
import styles from "./CalendarPage.module.scss";
import dynamic from "next/dynamic";
import Calendar from "./Calendar";

const ComingSchedule = dynamic(() => import("./ComingSchedule"));
// const Calendar = dynamic(() => import("./Calendar"));

const CalnedarContainer = ({ idolData, params }: any) => {
  return (
    <section className={styles.calendarContainer}>
      <div className={styles.calendarWrap}>
        <Calendar idolData={idolData} params={params} />
      </div>
      <ComingSchedule />
    </section>
  );
};

export default CalnedarContainer;

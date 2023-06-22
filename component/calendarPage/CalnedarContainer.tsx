"use client";
import React from "react";
import styles from "./CalendarPage.module.scss";
// import Calendar from "./Calendar";
import dynamic from "next/dynamic";

const ComingSchedule = dynamic(() => import("./ComingSchedule"));
const Calendar = dynamic(() => import("./Calendar"));

const CalnedarContainer = ({ idolData, params }: any) => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendar}>
        <div className={styles.calendarWrap}>
          <Calendar idolData={idolData} params={params} />
        </div>
      </div>
      <ComingSchedule />
    </div>
  );
};

export default CalnedarContainer;

"use client";
import React from "react";
import styles from "./CalendarPage.module.scss";
import Calendar from "./Calendar";
// import ComingSchedule from "./ComingSchedule";
import dynamic from "next/dynamic";

const ComingSchedule = dynamic(() => import("./ComingSchedule"));

const CalnedarContainer = ({ idolData, params }: any) => {
  console.log(idolData);
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

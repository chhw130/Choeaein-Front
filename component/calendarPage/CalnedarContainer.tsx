"use client";
import React from "react";
import styles from "./CalendarPage.module.scss";
import Calendar from "./Calendar";
import ComingSchedule from "./ComingSchedule";

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

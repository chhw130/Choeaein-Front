"use client";
import styles from "../calendarPage/Calendar.module.scss";

const IdolInform = ({ idolData }: any) => {
  return (
    <div className={styles.idolName}>
      <p>{idolData?.idol_name_kr}</p>
      {idolData?.Girl_group ? (
        <p>{idolData?.Girl_group}</p>
      ) : (
        <p>{idolData?.Boy_group}</p>
      )}
    </div>
  );
};

export default IdolInform;

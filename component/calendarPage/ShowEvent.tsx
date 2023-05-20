import styles from "./Calendar.module.scss";
import moment from "moment";
import "moment/locale/ko";

export function ShowEvent({ days, newIdolSchedule }: any) {
  return (
    <>
      <div className={styles.testDiv}>
        {newIdolSchedule?.map((item: any, i: number) => {
          // eslint-disable-next-line
          if (days?.format("D") == moment(item.day)) {
            return (
              <div
                key={i}
                className={`${styles.listItem} ${
                  styles[item.ScheduleType.type]
                }`}
              >
                {item.data}
              </div>
            );
          }
          return true;
        })}
      </div>
    </>
  );
}

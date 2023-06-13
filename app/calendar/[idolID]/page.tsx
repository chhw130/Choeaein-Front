import { specificIdolInform } from "@/utils/axios/AxiosSetting";
import styles from "./CalendarPage.module.scss";
import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("@/component/calendarPage/Calendar"));
const ComingSchedule = dynamic(
  () => import("@/component/calendarPage/ComingSchedule")
);
async function CalendarPage(params: any) {
  const idolId = params.params.idolID;
  const idolData = await getData(idolId);

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
}

export default CalendarPage;

async function getData(idolId: string) {
  const idolData = await specificIdolInform(idolId);

  return idolData;
}

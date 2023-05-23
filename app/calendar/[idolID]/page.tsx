"use client";
import {
  specificIdolInform,
  specificIdolSchedule,
} from "@/utils/axios/AxiosSetting";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styles from "./CalendarPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, faCheck } from "@fortawesome/free-solid-svg-icons";
import Calendar from "@/component/calendarPage/Calendar";
import IdolInform from "@/component/calendarPage/IdolInform";

async function CalendarPage(params: any) {
  const [reportModal, setReportModal] = useState(false);

  const idolSchedule: [] = [];

  const idolId = params.params.idolID;
  const idolData = await getData(idolId);
  console.log(idolData);
  // 3일 이후 날짜 구하기

  const today = new Date();

  const one_after = new Date(today);
  one_after.setDate(today.getDate() + 1);

  const two_after = new Date(today);
  two_after.setDate(today.getDate() + 2);

  const three_after = new Date(today);
  three_after.setDate(today.getDate() + 3);

  // 3일 이후 날짜 문자화해서 년,월,일 정보 슬라이스
  const one_after_slice = one_after.toISOString().slice(0, 10);
  const two_after_slice = two_after.toISOString().slice(0, 10);
  const three_after_slice = three_after.toISOString().slice(0, 10);

  const oneType = idolSchedule?.filter(
    (item: any) => item.when.slice(0, 10) === one_after_slice
  );

  const twoType = idolSchedule?.filter(
    (item: any) => item.when.slice(0, 10) === two_after_slice
  );

  const threeType = idolSchedule?.filter(
    (item: any) => item.when.slice(0, 10) === three_after_slice
  );

  const type = (type: any) => {
    for (var i = 0; i < type?.length; i++) {
      if (type[i].ScheduleTitle.length > 0) {
        const a = type[i];
        return a;
      }
    }
  };
  const nextDay = [];
  const dayType = [oneType, twoType, threeType];

  for (var i = 0; i < dayType.length; i++) {
    if (type(dayType[i])) {
      nextDay.push(type(dayType[i]));
    }
  }

  /**사이드바 */
  const [sidebar, setSidebar] = useState(false);
  /**아이돌 day데이터 */
  const [newIdolDateSchedule, setNewIdolDateSchedule] = useState([]);

  const [prevIdolDateSchedule, setPrevIdolDateSchedule] = useState([]);
  const [nextIdolDateSchedule, setNextIdolDateSchedule] = useState([]);

  const [selectedDate, setSelectedDate] = useState(0);
  const [newUserDateSchedule, setNewUserDateSchedule] = useState([]);

  const [prevSelectedDate, setPrevSelectedDate] = useState(0);
  const [nextSelectedDate, setNextSelectedDate] = useState(0);

  /**클릭한 날짜와 그 날짜의 스케줄 */
  const todayDate = (
    date: any,
    idolDateSchedule: any,
    userDateSchedule: any
  ) => {
    setNewIdolDateSchedule(idolDateSchedule);
    setNewUserDateSchedule(userDateSchedule);
    setSelectedDate(date.format("M월 D일 (ddd)"));
  };

  const prevDate = (date: any, idolDateSchedule: any) => {
    setPrevIdolDateSchedule(idolDateSchedule);
    setPrevSelectedDate(date.format("M월 D일 (ddd)"));
  };

  const nextDate = (date: any, idolDateSchedule: any) => {
    setNextIdolDateSchedule(idolDateSchedule);
    setNextSelectedDate(date.format("M월 D일 (ddd)"));
  };

  const setSidebarOpen = (isSidebar: boolean) => {
    setSidebar(isSidebar);
  };

  const setSidebarClose = (isSidebar: boolean) => {
    setSidebar(isSidebar);
  };

  /**모달 숨기는 함수 */
  const hideModalHandler = () => {
    setReportModal(false);
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendar}>
        <div className={styles.calendarWrap}>
          {/* <IdolInform idolData={idolData} /> */}
          <Calendar
            todayDate={todayDate}
            setSidebarOpen={setSidebarOpen}
            prevDate={prevDate}
            nextDate={nextDate}
          />
          {/* <Sidebar
            sidebar={sidebar}
            setSidebarClose={setSidebarClose}
            selectedDate={selectedDate}
            prevSelectedDate={prevSelectedDate}
            nextSelectedDate={nextSelectedDate}
            newIdolDateSchedule={newIdolDateSchedule}
            prevIdolDateSchedule={prevIdolDateSchedule}
            nextIdolDateSchedule={nextIdolDateSchedule}
            newUserDateSchedule={newUserDateSchedule}
          /> */}
        </div>
        {/* {Number(idolId) === userPick ? (
          <button
            className={styles.reportBtn}
            onClick={() => {
              setReportModal(true);
            }}
          >
            제보하기
          </button>
        ) : null}
        {reportModal ? (
          <Modal hideCartHandler={hideModalHandler}>
            <ReportSchedule hideModalHandler={hideModalHandler} />
          </Modal>
        ) : null} */}
        <section className={styles.nextSchedule}>
          <div className={styles.nextSchedule_Title}>
            <h3 className={styles.nextSchedule_Content}>다가오는 스케줄</h3>
          </div>
          <ul className={styles.nextSchedule_List}>
            {nextDay?.map((day) => {
              const dateFormat = `${day.when.slice(5, 7)}월 ${day.when.slice(
                8,
                10
              )}일`;

              const { type: scheduleType } = day.ScheduleType;
              //   const scheduleIcon = {
              //     broadcast: faBroadcastTower,
              //     event: faCalendarCheck,
              //     release: faCompactDisc,
              //     congrats: faGift,
              //     buy: faStore,
              //   }[scheduleType];

              //   const scheduleIconColor = {
              //     broadcast: "#443c68",
              //     event: "#537fe7",
              //     release: "#f16767",
              //     congrats: "#e7b10a",
              //     buy: "#609966",
              //   }[scheduleType];

              return day.ScheduleTitle ? (
                <li className={styles.nextScheduleItem} key={day.pk}>
                  <div className={styles.nextSchedule_LeftWrapper}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span className={styles.nextScheduleDay}>{dateFormat}</span>
                  </div>
                  <div className={styles.nextSchedule_LightWrapper}>
                    <ul className={styles.todaySchedule_List}>
                      <li className={styles.todaySchedule_Item} key={day.pk}>
                        <FontAwesomeIcon
                          //   icon={scheduleIcon}
                          icon={fa0}
                          //   color={scheduleIconColor}
                          className={styles.iconDIv}
                        />
                        <span className={styles.nextSchedule_ContentList}>
                          {day.ScheduleTitle}
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : null;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default CalendarPage;

async function getData(idolId: string) {
  const idolData = await specificIdolInform(idolId);

  return idolData;
}

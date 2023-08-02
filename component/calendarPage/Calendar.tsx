"use client";
import styles from "./Calendar.module.scss";
import "moment/locale/ko";
import IdolInform from "./IdolInform";
import { Flex } from "@chakra-ui/react";
import useCalendar from "@/utils/hook/useCalendar";
import { ChoeIdolType } from "@/utils/interface/interface";
import useUser from "@/utils/hook/useUser";
import CalendarBtnGroup from "../molecules/ButtonGroup/CalendarBtnGroup";
import { days } from "@/utils/data/ClientData";
import dynamic from "next/dynamic";
import CategoryBtnGroup from "../molecules/ButtonGroup/CategoryBtnGroup";

const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
);
const CalendarTable = dynamic(() => import("./CalendarTable"));
const ReportBtn = dynamic(
  () => import("@/component/molecules/ButtonGroup/CalendarReportBtnGroup")
);

const Calendar = ({ idolData }: { idolData: ChoeIdolType }) => {
  const {
    isOpen,
    onClose,
    calendarArr,
    selectedDay,
    setMoment,
    setSelectedDay,
    today,
    getMoment,
    isLoading,
    idolDateSchedules,
    dateLoading,
  } = useCalendar(idolData);

  const { userData } = useUser();

  const isUserPick = userData?.pick === idolData.pk;

  return (
    <>
      <ViewDayCalendarModal
        selectedDay={selectedDay}
        isOpen={isOpen}
        onClose={onClose}
        idolDateSchedules={idolDateSchedules}
        dateLoading={dateLoading}
      />
      <article className={styles.calendarContainer}>
        <Flex justifyContent="space-between" padding="10px 15px">
          <IdolInform idolData={idolData} />
          <CalendarBtnGroup
            setMoment={setMoment}
            getMoment={getMoment}
            today={today}
            setSelectedDay={setSelectedDay}
          />
        </Flex>
        <CategoryBtnGroup idolId={idolData.pk} />
        <CalendarTable
          days={days}
          calendarArr={calendarArr}
          isLoading={isLoading}
        />
        {isUserPick && <ReportBtn idolData={idolData} />}
      </article>
    </>
  );
};
export default Calendar;

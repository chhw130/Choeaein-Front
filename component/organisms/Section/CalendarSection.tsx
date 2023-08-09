"use client";
import "moment/locale/ko";
import IdolInform from "../../calendarPage/IdolInform";
import { Flex } from "@chakra-ui/react";
import useCalendar from "@/utils/hook/useCalendar";
import { ChoeIdolType } from "@/utils/interface/interface";
import CalendarBtnGroup from "../../molecules/ButtonGroup/CalendarDateBtnGroup";
import { days } from "@/utils/data/ClientData";
import dynamic from "next/dynamic";
import CategoryBtnGroup from "../../molecules/ButtonGroup/CategoryBtnGroup";
import CalendarDateBtnGroup from "../../molecules/ButtonGroup/CalendarDateBtnGroup";

const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
);
const CalendarTable = dynamic(
  () => import("../../molecules/Table/CalendarTable")
);

const CalendarSection = ({ idolData }: { idolData: ChoeIdolType }) => {
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

  return (
    <>
      <ViewDayCalendarModal
        selectedDay={selectedDay}
        isOpen={isOpen}
        onClose={onClose}
        idolDateSchedules={idolDateSchedules}
        dateLoading={dateLoading}
      />
      <Flex
        as="article"
        w={["100%", "100%", "75%"]}
        h={"80%"}
        fontSize={"1.3rem"}
        display={"flex"}
        flexDir={"column"}
        margin={"0 auto"}
      >
        <Flex justifyContent="space-between" padding="10px 15px">
          <IdolInform idolData={idolData} />
          <CalendarDateBtnGroup
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
      </Flex>
    </>
  );
};
export default CalendarSection;

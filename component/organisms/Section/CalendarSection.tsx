"use client";
import "moment/locale/ko";
import IdolInform from "../../molecules/Idol/IdolInform";
import { Flex } from "@chakra-ui/react";
import useCalendar from "@/utils/hook/useCalendar";
import { ChoeIdolType } from "@/utils/interface/interface";
import { days } from "@/utils/data/ClientData";
import dynamic from "next/dynamic";
import CategoryBtnGroup from "../../molecules/ButtonGroup/CategoryBtnGroup";
import CalendarDateBtnGroup from "../../molecules/ButtonGroup/CalendarDateBtnGroup";
import CalendarTable from "@/component/molecules/Table/CalendarTable";
const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
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
        w={"100%"}
        maxW="1400px"
        h={"80%"}
        fontSize={"1.3rem"}
        display={"flex"}
        flexDir={"column"}
        margin={"30px auto"}
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

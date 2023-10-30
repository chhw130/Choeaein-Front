"use client";
import "moment/locale/ko";
import IdolInform from "../../molecules/Idol/IdolInform";
import { Box, Center, Flex, Skeleton } from "@chakra-ui/react";
import useCalendar from "@/utils/hook/useCalendar";
import { ChoeIdolType } from "@/utils/interface/interface";
import { days } from "@/utils/data/ClientData";
import dynamic from "next/dynamic";
import CategoryBtnGroup from "../../molecules/ButtonGroup/CategoryBtnGroup";
import CalendarDateBtnGroup from "../../molecules/ButtonGroup/CalendarDateBtnGroup";
import SpinnerUI from "@/component/atoms/Spinner/SpinnerUI";
import TextAtom from "@/component/atoms/Text/TextAtom";
const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
);

const CalendarTable = dynamic(
  () => import("@/component/molecules/Table/CalendarTable"),
  {
    loading: () => (
      <Box pos={"relative"}>
        <Skeleton
          w={"100%"}
          h={["550px", "600px", "700px"]}
          top={"0"}
          flexDir={"column"}
          borderRadius={"10px"}
        />
        <Center
          pos={"absolute"}
          top={"10px"}
          flexDir={"column"}
          w={"100%"}
          h={["550px", "600px", "700px"]}
        >
          <SpinnerUI />
          <TextAtom color={"olive"}>아이돌 일정을 불러오고 있습니다.</TextAtom>
        </Center>
      </Box>
    ),
  }
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

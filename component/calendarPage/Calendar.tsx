"use client";
import styles from "./Calendar.module.scss";
import moment from "moment";
import "moment/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IdolInform from "./IdolInform";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import {
  faChevronLeft,
  faChevronRight,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import CategoryBtn from "./CategoryBtn";
import useCalendar from "@/utils/hook/useCalendar";
import { ChoeIdolType } from "@/utils/interface/interface";
import useUser from "@/utils/hook/useUser";
const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
);
const CalendarTable = dynamic(() => import("./CalendarTable"));
const ReportBtn = dynamic(() => import("@/UI/Button/ReportBtn"));

const days = ["일", "월", "화", "수", "목", "금", "토"];

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
        <Flex justifyContent="space-between" padding="10px 20px">
          <IdolInform idolData={idolData} />
          <Flex fontSize={[15, 18, 26]} margin={"auto 0"}>
            <Button
              margin={"auto 0"}
              size={["sm", "sm", "md"]}
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </Button>
            <Text
              margin="auto 5px"
              width={["75px", "130px", "150px"]}
              textAlign={"center"}
            >
              {today.format("YYYY.MM")}
            </Text>
            <Button
              size={["sm", "sm", "md"]}
              margin={"auto 0"}
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </Button>
            <Button
              size={["sm", "sm", "md"]}
              margin={"auto 0"}
              onClick={() => {
                setMoment(moment());
                setSelectedDay(moment());
              }}
            >
              <FontAwesomeIcon icon={faRotateRight} />
            </Button>
          </Flex>
        </Flex>
        <CategoryBtn idolId={idolData.pk} />

        <Box h={"100%"} pos={"relative"}>
          <CalendarTable
            days={days}
            calendarArr={calendarArr}
            isLoading={isLoading}
          />
        </Box>
        {isUserPick && <ReportBtn idolData={idolData} />}
      </article>
    </>
  );
};
export default Calendar;

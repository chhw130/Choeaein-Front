"use client";
import styles from "./Calendar.module.scss";
import { useMemo, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IdolInform from "./IdolInform";
import {
  Box,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { CalendarPageProps } from "@/app/calendar/[idolID]/page";
import {
  faChevronLeft,
  faChevronRight,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import CategoryBtn from "./CategoryBtn";
import { getIdolSchedule } from "@/utils/API/CSRSetting";
import ShowEvent from "./ShowEvent";
const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
);
const CalendarTable = dynamic(() => import("./CalendarTable"));
const ReportBtn = dynamic(() => import("@/UI/Button/ReportBtn"));
interface CalendarProps extends CalendarPageProps {
  idolData: any;
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = ({ idolData, params }: CalendarProps) => {
  const idolId = params.idolID;

  const { data: newIdolSchedule = [], isLoading } = useQuery(
    ["idolSchedule", idolId],
    () => getIdolSchedule(idolId)
  );

  const { isOpen, onClose, onOpen } = useDisclosure();

  /**선택한 날 */
  const [selectedDay, setSelectedDay] = useState(moment());

  /**현재 보여주는 달의 날짜들 */
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  // 그 달의 시작하는 week() 주
  const firstWeek = today.clone().startOf("month").week();

  //  1년은 52주가 존재하고 며칠이 더 있는데 이 부분을 달력은 53주로써 표현해야 함
  // 하지만 moment()는 내년의 첫 주인 1로 표시하기 때문에 마지막 주가 1이라면 53으로 표시
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result: any[] = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <Tr
          key={week}
          fontSize={[15, 18, 20]}
          lineHeight={2}
          padding={[2, 3, 4]}
        >
          {Array(7)
            .fill(0)
            .map((data: [], index: number) => {
              const days = useMemo(() => {
                return today
                  .clone()
                  .startOf("year")
                  .week(week)
                  .startOf("week")
                  .add(index, "day");
              }, []);

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <Td
                    width={10}
                    height={20}
                    padding={[2, 3, 4]}
                    textAlign="center"
                    key={index}
                    onClick={() => {
                      setSelectedDay(days);
                      onOpen();
                    }}
                    cursor={"pointer"}
                    border={
                      selectedDay &&
                      selectedDay.format("YYYYMMDD") === days.format("YYYYMMDD")
                        ? "3px solid  rgb(184, 213, 88)"
                        : undefined
                    }
                  >
                    <div>{days.format("D")}</div>

                    <div className={styles.eventContent}>
                      <ShowEvent
                        days={days}
                        newIdolSchedule={newIdolSchedule}
                      />
                    </div>
                  </Td>
                );
                // 다른 달은 글씨 색 연하게
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <Td
                    width={10}
                    height={20}
                    padding={[2, 3, 4]}
                    textAlign="center"
                    key={index}
                    style={{ color: "#c2c2c2" }}
                  >
                    {days.format("D")}
                    <div className={styles.eventContent} />
                  </Td>
                );
              } else {
                return (
                  <Td
                    width={10}
                    height={20}
                    padding={[2, 3, 4]}
                    textAlign="center"
                    key={index}
                    onClick={() => {
                      setSelectedDay(days);
                      onOpen();
                    }}
                    cursor={"pointer"}
                    border={
                      selectedDay &&
                      selectedDay.format("YYYYMMDD") === days.format("YYYYMMDD")
                        ? "3px solid  rgb(184, 213, 88)"
                        : undefined
                    }
                  >
                    <Box>
                      <div>{days.format("D")}</div>
                      <div className={styles.eventContent}>
                        <ShowEvent
                          days={days}
                          newIdolSchedule={newIdolSchedule}
                        />
                      </div>
                    </Box>
                  </Td>
                );
              }
            })}
        </Tr>
      );
    }
    return result;
  };

  return (
    <>
      <ViewDayCalendarModal
        selectedDay={selectedDay}
        isOpen={isOpen}
        onClose={onClose}
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
        <CategoryBtn idolId={idolId} />

        <Box h={"500px"} pos={"relative"}>
          <CalendarTable
            days={days}
            calendarArr={calendarArr}
            isLoading={isLoading}
          />
        </Box>
        <ReportBtn />
      </article>
    </>
  );
};
export default Calendar;

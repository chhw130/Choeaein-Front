"use client";
import styles from "./Calendar.module.scss";
import { useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import { ShowEvent } from "./ShowEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IdolInform from "./IdolInform";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { specificIdolSchedule } from "@/utils/axios/AxiosSetting";
import { CalendarPageProps } from "@/app/calendar/[idolID]/page";
import {
  faBroadcastTower,
  faCalendarCheck,
  faChevronLeft,
  faChevronRight,
  faCompactDisc,
  faGift,
  faRotateRight,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
const ViewDayCalendarModal = dynamic(
  () => import("@/UI/Modal/ViewDayCalendarModal")
);

interface CalendarProps extends CalendarPageProps {
  idolData: any;
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = ({ idolData, params }: CalendarProps) => {
  const idolId = params.idolID;
  const { data: newIdolSchedule = [], isLoading } = useQuery(
    ["idolSchedule", idolId],
    () => specificIdolSchedule(idolId)
  );

  /**모달 */
  const { isOpen, onClose, onOpen } = useDisclosure();

  /**선택한 날 */
  const userPick = 1;
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

  // 반복문을 사용하여 해당 달의 총주의 수만큼 반복문을 실행하고 테이블의 내용을 배열에 추가
  // 길이가 7인 arr를 생성 후 index를 기반으로 day을 표기

  const buttons =
    Number(idolId) === userPick
      ? [
          {
            pk: 1,
            category: "broadcast",
            content: "방송",
            icon: faBroadcastTower,
          },
          { pk: 2, category: "event", content: "행사", icon: faCalendarCheck },
          { pk: 3, category: "release", content: "발매", icon: faCompactDisc },
          { pk: 4, category: "congrats", content: "축하", icon: faGift },
          { pk: 5, category: "buy", content: "구매", icon: faStore },
          { pk: 6, category: "my", content: "My", icon: faUser },
        ]
      : [
          {
            pk: 1,
            category: "broadcast",
            content: "방송",
            icon: faBroadcastTower,
          },
          { pk: 2, category: "event", content: "행사", icon: faCalendarCheck },
          { pk: 3, category: "release", content: "발매", icon: faCompactDisc },
          { pk: 4, category: "congrats", content: "축하", icon: faGift },
          { pk: 5, category: "buy", content: "구매", icon: faStore },
        ];
  const initActiveButtons =
    Number(idolId) === userPick
      ? ["broadcast", "event", "release", "congrats", "buy", "my"]
      : ["broadcast", "event", "release", "congrats", "buy"];

  const [activeButtons, setActiveButtons] = useState(initActiveButtons);

  /**클릭한 버튼 toggle 함수 */
  const handleClick = (buttonPk: string) => {
    if (activeButtons.length === 1 && activeButtons.includes(buttonPk)) {
      return;
    }
    const index = activeButtons.indexOf(buttonPk);

    if (index === -1) {
      setActiveButtons([...activeButtons, buttonPk]);
    } else {
      setActiveButtons([
        ...activeButtons.slice(0, index),
        ...activeButtons.slice(index + 1),
      ]);
    }
  };

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
            // eslint-disable-next-line
            .map((data: any, index: number) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              // 오늘 날짜에 today style 적용
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
                  >
                    <div
                      className={
                        selectedDay &&
                        selectedDay.format("YYYYMMDD") ===
                          days.format("YYYYMMDD")
                          ? styles.selectedDay
                          : undefined
                      }
                    >
                      {days.format("D")}
                    </div>

                    <div className={styles.eventContent}>
                      <ShowEvent
                        buttons={buttons}
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
                    onClick={(e) => {
                      setSelectedDay(days);
                      onOpen();
                    }}
                    cursor={"pointer"}
                  >
                    <div
                      className={
                        selectedDay &&
                        selectedDay.format("YYYYMMDD") ===
                          days.format("YYYYMMDD")
                          ? styles.selectedDay
                          : undefined
                      }
                    >
                      {days.format("D")}
                    </div>

                    <div className={styles.eventContent}>
                      <ShowEvent
                        buttons={buttons}
                        days={days}
                        newIdolSchedule={newIdolSchedule}
                      />
                    </div>
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
      <div className={styles.calendarContainer}>
        <Flex justifyContent="space-between" padding="10px 20px">
          <IdolInform idolData={idolData} />
          <Flex fontSize={[20, 30, 30]}>
            <button
              className={styles.prevBtn}
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <Text
              margin="auto 10px"
              width={["75px", "130px", "150px"]}
              textAlign={"center"}
            >
              {today.format("YYYY.MM")}
            </Text>
            <button
              className={styles.nextBtn}
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
            <button
              className={styles.todayBtn}
              onClick={() => {
                setMoment(moment());
              }}
            >
              <FontAwesomeIcon icon={faRotateRight} />
            </button>
          </Flex>
        </Flex>

        <div className={styles.categoryContainer}>
          {buttons.map((btn) => (
            <Button
              fontSize={[11, 13, 15]}
              w={[40, 80, 150]}
              h={[10, 14, 16]}
              className={`${
                activeButtons.includes(btn.category)
                  ? styles.active
                  : styles.inactive
              } 
             ${styles.buttonss}
            `}
              key={btn.category}
              onClick={() => handleClick(btn.category)}
            >
              <FontAwesomeIcon className={styles.icons} icon={btn.icon} />
              {btn.content}
            </Button>
          ))}
        </div>
        {!isLoading ? (
          <Table h={"500px"} w="100%">
            <Thead>
              <Tr>
                {days.map((day, index) => {
                  return (
                    <Th
                      key={index}
                      textAlign="center"
                      fontSize={[15, 18, 20]}
                      padding={[3, 4, 5]}
                    >
                      {day}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody className={styles.calendarTbody}>{calendarArr()}</Tbody>
          </Table>
        ) : (
          <Box w="100%" h={"500px"}>
            <Spinner
              position="absolute"
              top="30%"
              left="47.5%"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#f89598"
              size="xl"
            />
          </Box>
        )}
      </div>
    </>
  );
};
export default Calendar;

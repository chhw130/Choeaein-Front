"use client";
import styles from "./Calendar.module.scss";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";

import {
  faUser,
  faRotateRight,
  faChevronRight,
  faChevronLeft,
  faBroadcastTower,
  faCompactDisc,
  faStore,
  faGift,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
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
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { specificIdolSchedule } from "@/utils/axios/AxiosSetting";

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = ({
  todayDate,
  setSidebarOpen,
  prevDate,
  nextDate,
  idolData,
  params,
}: any) => {
  const idolId = params.params.idolID;
  const { data: newIdolSchedule = [], isLoading } = useQuery(
    ["idolSchedule", idolId],
    () => specificIdolSchedule(idolId)
  );

  /**선택한 날 */
  const userPick = 1;
  const [selectedDay, setSelectedDay] = useState(moment());
  const [prevsSelectedDay, setPrevsSelectedDay] = useState(
    moment().subtract(1, "day")
  );
  const [nextsSelectedDay, setNextsSelectedDay] = useState(
    moment().add(1, "day")
  );

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

  /**스케줄 불러오기 */
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

  /**이번달 데이터 */
  // const [newIdolSchedule, setNewIdolSchedule] = useState([]);
  /**이번달 데이터와 클릭한 일자 데이터 */
  const [newIdolDateSchedule, setNewIdolDateSchedule] = useState([]);

  const [prevIdolDateSchedule, setPrevIdolDateSchedule] = useState([]);
  const [nextIdolDateSchedule, setNextIdolDateSchedule] = useState([]);

  const newSelectedDay = selectedDay.format("YYYY/MM/DD");

  const prevSelectedDay = prevsSelectedDay.format("YYYY/MM/DD");
  const nextSelectedDay = nextsSelectedDay.format("YYYY/MM/DD");

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

  /** */
  const calendarArr = () => {
    let result: any[] = []; // 이번달 배열
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
                      setPrevsSelectedDay(moment(days).subtract(1, "days"));
                      setNextsSelectedDay(moment(days).add(1, "days"));

                      setSidebarOpen(true);
                    }}
                    className={styles.today}
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
                      setPrevsSelectedDay(moment(days).subtract(1, "days"));
                      setNextsSelectedDay(moment(days).add(1, "days"));
                      setSidebarOpen(true);
                    }}
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

  // 카테고리 배열

  return (
    <>
      <div className={styles.calendarContainer}>
        <Flex justifyContent="space-between" padding="10px 20px">
          <IdolInform idolData={idolData} />
          <Flex fontSize={[20, 30, 30]}>
            <button
              className={styles.prevBtn}
              onClick={() => {
                // clone() 은 기존의 moment가 아닌 새로운 객체를 반환했다는 의미
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <div className={styles.title}>{today.format("YYYY.MM")}</div>
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

        {/* 버튼 */}
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

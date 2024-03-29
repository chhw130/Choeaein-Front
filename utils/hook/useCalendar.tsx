import ShowEvent from "@/component/calendarPage/ShowEvent";
import { Box, Flex, Td, Tr, useDisclosure } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ChoeIdolType, IdolDateScheduleType } from "../interface/interface";
import { useMutation } from "@tanstack/react-query";
import { getIdolSchedule } from "../API/CSRSetting";
import { useRecoilValue } from "recoil";
import { categoryState } from "../RecoilStore/CategoryState";
import useIdolDateSchedules from "./useIdolDateSchedules";

interface UseCalendarType {
  isOpen: boolean;
  onClose: () => void;
  calendarArr: Function;
  selectedDay: moment.Moment;
  setSelectedDay: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setMoment: React.Dispatch<React.SetStateAction<moment.Moment>>;
  today: moment.Moment;
  getMoment: moment.Moment;
  isLoading: boolean;
  idolDateSchedules: IdolDateScheduleType[];
  dateLoading: boolean;
}

const useCalendar = (idolData: ChoeIdolType): UseCalendarType => {
  const categories = useRecoilValue(categoryState);
  const idolName = idolData.idol_name_en;

  /**선택한 날 */
  const [selectedDay, setSelectedDay] = useState(moment());

  /**현재 보여주는 달의 날짜들 */
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  const when = today.format("YYYY-MM");
  const postData = {
    when,
    categories,
  };

  /**스케줄 받아오기 */
  const {
    data: newIdolSchedule,
    isLoading,
    mutateAsync: getIdolScheduleHandler,
  } = useMutation((postData: any) => getIdolSchedule(postData, idolName));

  useEffect(() => {
    const getIdolHandler = async () => {
      await getIdolScheduleHandler(postData);
    };

    getIdolHandler();
  }, [when, categories]);

  /**스케줄 받아오기 (date) */
  const date = selectedDay.format("YYYY-MM-DD");
  const postDateData = {
    when: date,
    categories,
  };

  const {
    idolDateSchedules,
    isLoading: dateLoading,
    getIdolDayScheduleHandler,
  } = useIdolDateSchedules(postDateData, idolName);

  /**모달창 */
  const { isOpen, onClose, onOpen } = useDisclosure();

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
              const days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <Td
                    width={10}
                    maxW={10}
                    height={20}
                    padding={[2, 3, 4]}
                    textAlign="center"
                    key={index}
                    onClick={async () => {
                      setSelectedDay(days);
                      onOpen();
                      await getIdolDayScheduleHandler();
                    }}
                    cursor={"pointer"}
                    border={
                      selectedDay &&
                      selectedDay.format("YYYYMMDD") === days.format("YYYYMMDD")
                        ? "3px solid  rgb(184, 213, 88)"
                        : undefined
                    }
                  >
                    <Box>{days.format("D")}</Box>

                    <Flex h={"16px"} justifyContent={"center"}>
                      <ShowEvent
                        days={days}
                        newIdolSchedule={newIdolSchedule}
                      />
                    </Flex>
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
                    <Box
                      h={"16px"}
                      display={"flex"}
                      width={"100%"}
                      justifyContent={"center"}
                    />
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
                    onClick={async () => {
                      setSelectedDay(days);
                      onOpen();
                      await getIdolDayScheduleHandler();
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
                      <Box>{days.format("D")}</Box>
                      <Flex h={"16px"} justifyContent={"center"}>
                        <ShowEvent
                          days={days}
                          newIdolSchedule={newIdolSchedule}
                        />
                      </Flex>
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

  return {
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
  };
};

export default useCalendar;

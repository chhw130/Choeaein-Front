"use client";
import {
  Center,
  Skeleton,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Calendar.module.scss";
import SpinnerUI from "@/UI/Spinner/SpinnerUI";

interface CalendarTableProps {
  calendarArr: Function;
  days: string[];
  isLoading: boolean;
}

const CalendarTable = ({
  calendarArr,
  days,
  isLoading,
}: CalendarTableProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <Skeleton
            w={"100%"}
            h={"500px"}
            top={"0"}
            flexDir={"column"}
            borderRadius={"10px"}
          />
          <Center
            pos={"absolute"}
            top={"0"}
            flexDir={"column"}
            w={"100%"}
            h={"500px"}
          >
            <SpinnerUI />
            <Text color={"olive"}>아이돌 일정을 불러오고 있습니다.</Text>
          </Center>
        </>
      ) : (
        <Table h={"500px"} w="100%" pos={"relative"}>
          <Thead>
            <Tr>
              {days.map((day: any, index: number) => {
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
      )}
    </>
  );
};

export default CalendarTable;

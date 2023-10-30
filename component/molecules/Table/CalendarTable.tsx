"use client";
import {
  Box,
  Center,
  Skeleton,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import SpinnerUI from "@/component/atoms/Spinner/SpinnerUI";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface CalendarTableProps {
  calendarArr: Function;
  days: string[];
  isLoading: boolean;
}

const CalendarTable = ({ calendarArr, days }: CalendarTableProps) => {
  return (
    <>
      <Table h={["550px", "600px", "700px"]} w="100%" pos={"relative"}>
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
        <Tbody>{calendarArr()}</Tbody>
      </Table>
    </>
  );
};

export default CalendarTable;

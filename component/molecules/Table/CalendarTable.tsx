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

const CalendarTable = ({
  calendarArr,
  days,
  isLoading,
}: CalendarTableProps) => {
  return (
    <>
      {isLoading ? (
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
            <TextAtom color={"olive"}>
              아이돌 일정을 불러오고 있습니다.
            </TextAtom>
          </Center>
        </Box>
      ) : (
        <Table h={["550px", "600px", "700px"]} w="100%" pos={"relative"}>
          <Thead>
            <Tr>
              {days.map((day, index) => {
                return (
                  <Th
                    key={index}
                    textAlign="center"
                    fontSize={[15, 18, 24]}
                    padding={[3, 4, 5]}
                  >
                    {day}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody >{calendarArr()}</Tbody>
        </Table>
      )}
    </>
  );
};

export default CalendarTable;

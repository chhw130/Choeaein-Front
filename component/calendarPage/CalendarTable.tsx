import {
  Box,
  Center,
  Spinner,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Calendar.module.scss";

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
    <Box pos={"relative"}>
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
      {isLoading && (
        <Center
          pos={"absolute"}
          w={"100%"}
          h={"500px"}
          bgColor={"RGBA(213, 213, 213, 0.85)"}
          top={"0"}
          flexDir={"column"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#f89598"
            size="xl"
          />
          <Text color={"white"}>아이돌 일정을 불러오고 있습니다.</Text>
        </Center>
      )}
    </Box>
  );
};

export default CalendarTable;

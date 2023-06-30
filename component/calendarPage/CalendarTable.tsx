import {
  Box,
  Center,
  Spinner,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Calendar.module.scss";

const CalendarTable = ({ calendarArr, days }: any) => {
  return (
    <Box>
      <Table h={"500px"} w="100%">
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
      <Center bg={"red"} h={"500px"} position="absolute">
        <Spinner
          top="35%"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#f89598"
          size="xl"
        />
      </Center>
    </Box>
  );
};

export default CalendarTable;

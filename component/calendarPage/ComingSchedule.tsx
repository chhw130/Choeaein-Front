"use client";
import React from "react";
import { Card, Center, Text, VStack } from "@chakra-ui/react";

const ComingSchedule = () => {
  const nextDay: string[] = ["schedule1", "schedule2", "schedule3"];
  return (
    <Center flexDir="column" margin={30}>
      <Text fontSize="35px" fontWeight="bold">
        다가오는 스케줄
      </Text>
      <VStack margin={10}>
        {nextDay.map((day, index) => (
          <Card key={index} w={[300, 400, 500]} h="50px">
            {day}
          </Card>
        ))}
      </VStack>
    </Center>
  );
};

export default ComingSchedule;

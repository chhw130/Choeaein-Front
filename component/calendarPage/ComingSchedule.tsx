"use client";
import React from "react";
import { Button, Card, Center, Text, VStack, useToast } from "@chakra-ui/react";

const ComingSchedule = () => {
  const toast = useToast();
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
      <Button
        onClick={() =>
          toast({
            title: "게시글을 업로드했습니다.",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      ></Button>
    </Center>
  );
};

export default ComingSchedule;

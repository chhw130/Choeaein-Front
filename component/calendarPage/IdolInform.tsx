"use client";
import { Flex, HStack, Text } from "@chakra-ui/react";
import styles from "../calendarPage/Calendar.module.scss";

const IdolInform = ({ idolData }: any) => {
  return (
    <HStack spacing={2}>
      <Text fontSize={[30, 30, 40]}>{idolData?.idol_name_kr}</Text>
      {idolData?.Girl_group ? (
        <Text fontSize={[10, 20, 25]}>{idolData?.Girl_group}</Text>
      ) : (
        <Text fontSize={[10, 20, 25]}>{idolData?.Boy_group}</Text>
      )}
    </HStack>
  );
};

export default IdolInform;

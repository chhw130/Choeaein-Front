"use client";
import { HStack, Text } from "@chakra-ui/react";

const IdolInform = ({ idolData }: any) => {
  console.log(idolData);
  return (
    <HStack spacing={2}>
      <Text fontSize={[30, 30, 40]}>{idolData?.idol_name_kr}</Text>
      <Text lineHeight={2} fontSize={[10, 20, 25]}>
        {idolData?.group}
      </Text>
    </HStack>
  );
};

export default IdolInform;

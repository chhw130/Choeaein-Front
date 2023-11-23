import TextAtom from "@/component/atoms/Text/TextAtom";
import { VStack } from "@chakra-ui/react";
import React from "react";

const NotFoundInfoSection = () => {
  return (
    <VStack textAlign={"center"} >
      <TextAtom fontSize={["xl", "3xl","5xl"]}>
        죄송합니다. 해당 페이지를 찾을 수 없습니다.
      </TextAtom>
      <TextAtom fontSize={[ "lg","2xl","4xl"]}>요즘 떠오르는 아이돌들을 살펴보세요.</TextAtom>
    </VStack>
  );
};

export default NotFoundInfoSection;

"use client";
import React from "react";
import { Card, CardBody, Center, Text, VStack } from "@chakra-ui/react";
import useUpcomingSchedules from "@/utils/hook/useUpcomingSchedules";
import {
  ChoeIdolType,
  IdolDateScheduleType,
} from "@/utils/interface/interface";
import ComingScheduleList from "@/component/molecules/List/ComingScheduleList";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface ComingScheduleProps {
  idolData: ChoeIdolType;
}

const ComingScheduleSection = ({ idolData }: ComingScheduleProps) => {
  const idolName = idolData.idol_name_en;

  const { data } = useUpcomingSchedules(idolName);

  return (
    <Center flexDir="column" margin={"0 auto"} width={"60%"} maxW={"700px"}>
      <Text fontSize="35px" fontWeight="bold">
        다가오는 스케줄
      </Text>
      <VStack margin={10} width={"100%"}>
        {!data.length ? (
          <Card w={["100%", "100%", "80%"]}>
            <CardBody
              padding={"20px"}
              textAlign={"center"}
              fontSize={["lg", "lg", "1.5em"]}
            >
              <TextAtom>다가오는 스케줄이 없습니다</TextAtom>
              스케줄을 등록해주세요!!
            </CardBody>
          </Card>
        ) : (
          data?.map((data: IdolDateScheduleType, index: string) => {
            return <ComingScheduleList key={index} idolDateSchedule={data} />;
          })
        )}
      </VStack>
    </Center>
  );
};

export default ComingScheduleSection;

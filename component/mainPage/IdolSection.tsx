"use client";
import Link from "next/link";
import { IdolData } from "@/app/admin/[category]/interface";
import Image from "next/image";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import IdolCard from "@/UI/Card/IdolCard";

interface IdolSectionProps {
  idolData: IdolData[];
}

const IdolSection = ({ idolData }: IdolSectionProps) => {
  const slideImage = idolData?.slice(0, 30);

  return (
    <>
      <Box w={["98%", "98%", "90%"]} maxW="950px" margin="0 auto">
        <VStack textAlign={"center"} margin={"50px 0"} spacing={50}>
          <Box fontSize={["15px", "30px", "50px"]} fontWeight={"bold"}>
            <Text>60팀의 아티스트를</Text>
            <Text>최애인에서 만나볼 수 있어요</Text>
          </Box>
          <Box
            color={"#888888"}
            letterSpacing={"-0.6px"}
            fontSize={["13px", "20px", "30px"]}
          >
            <Text>지금 인기있는 아티스트들을 선택하고</Text>
            <Text>스케줄을 확인해서 나만의 스케줄을 만들어보세요</Text>
          </Box>
        </VStack>
        <Flex width="100%" flexWrap={"wrap"} justifyContent="space-around">
          {slideImage?.map((data: any) => (
            <IdolCard data={data} key={data.pk} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default IdolSection;

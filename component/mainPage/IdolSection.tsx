"use client";
import React, { useState } from "react";
import styles from "./IdolSection.module.scss";
import Link from "next/link";
import { IdolData } from "@/app/admin/[category]/interface";
import Image from "next/image";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

interface IdolSectionProps {
  idolData: IdolData[];
}

const IdolSection = ({ idolData }: IdolSectionProps) => {
  const slideImage = idolData?.slice(0, 30);

  return (
    <>
      <Box w={["98%", "98%", "90%"]} maxW="950px" margin="0 auto">
        <VStack textAlign={"center"} marginTop={50}>
          <Box fontSize={"3vw"}>
            <Text>60팀의 아티스트를</Text>
            <Text>최애인에서 만나볼 수 있어요</Text>
          </Box>
          <Box color={"#888888"} letterSpacing={"-0.6px"} fontSize={"1.5vw"}>
            <Text>지금 인기있는 아티스트들을 선택하고</Text>
            <Text>스케줄을 확인해서 나만의 스케줄을 만들어보세요</Text>
          </Box>
        </VStack>
        <Flex width="100%" flexWrap={"wrap"} justifyContent="space-around">
          {slideImage?.map((data: any) => (
            <Box
              key={data.pk}
              textAlign="center"
              margin="30px 0"
              w={["24%", "24%", "23%"]}
            >
              <Link href={`calendar/${data.pk}`}>
                <Image
                  className={styles.artistImage}
                  src={data?.idol_profile}
                  alt="아티스트 이미지"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <Text
                  fontFamily="fantasy"
                  paddingTop={"20px"}
                  margin={0}
                  fontSize="1.6vw"
                  letterSpacing="-0.19px"
                  cursor={"pointer"}
                >
                  {data.idol_name_kr}
                </Text>
                <Text
                  margin={0}
                  fontSize="1.6vw"
                  letterSpacing="-0.19px"
                  color={"#888888"}
                >
                  {data.idol_name_en}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default IdolSection;

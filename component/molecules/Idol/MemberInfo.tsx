"use client";
import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./Idol.module.scss";
import { GroupMember } from "@/utils/interface/interface";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface IdolCardProps {
  data: GroupMember;
}

const MemberInfo = ({ data }: IdolCardProps) => {
  return (
    <>
      <Box
        textAlign="center"
        w={["40%", "30%", "20%"]}
        className={styles.idolBox}
        pos={"relative"}
      >
        <Box as="a" href={`/calendar?idol=${data.idol_name_en}`}>
          <Image
            src={data?.idol_profile}
            alt="아티스트 이미지"
            width={300}
            height={300}
            loading="lazy"
            className={styles.groupImg}
          />
          <Center
            className={styles.textBox}
            pos={"absolute"}
            top={0}
            aspectRatio={1 / 1}
            visibility={"hidden"}
            width={"100%"}
            justifyContent={"center"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            borderRadius={"20%"}
            fontSize={"1.2rem"}
            cursor={"pointer"}
            color={"white"}
          >
            <TextAtom>스케줄 보러가기</TextAtom>
          </Center>
        </Box>

        <TextAtom
          paddingTop={"10px"}
          margin={0}
          fontSize={["lg", "lg", "2xl"]}
          letterSpacing="-0.19px"
          cursor={"pointer"}
        >
          {data.idol_name_kr}
        </TextAtom>
        <TextAtom
          margin={0}
          fontSize={["smaller", "sm", "lg"]}
          letterSpacing="-0.19px"
          color={"#888888"}
        >
          {data.idol_name_en}
        </TextAtom>
      </Box>
    </>
  );
};

export default MemberInfo;

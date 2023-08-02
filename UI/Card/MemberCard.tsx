"use client";
import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./IdolCard.module.scss";
import { GroupMember } from "@/utils/interface/interface";

interface IdolCardProps {
  data: GroupMember;
}

const MemberCard = ({ data }: IdolCardProps) => {
  const router = useRouter();

  return (
    <>
      <Box
        textAlign="center"
        w={["40%", "30%", "20%"]}
        className={styles.idolBox}
        pos={"relative"}
        onClick={() => router.push(`/calendar?idol=${data.idol_name_en}`)}
      >
        <Image
          src={data?.idol_profile}
          alt="아티스트 이미지"
          width={1000}
          height={1000}
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
          <Text>스케줄 보러가기</Text>
        </Center>
        <Text
          paddingTop={"10px"}
          margin={0}
          fontSize={["lg", "lg", "2xl"]}
          letterSpacing="-0.19px"
          cursor={"pointer"}
        >
          {data.idol_name_kr}
        </Text>
        <Text
          margin={0}
          fontSize={["smaller", "sm", "lg"]}
          letterSpacing="-0.19px"
          color={"#888888"}
        >
          {data.idol_name_en}
        </Text>
      </Box>
    </>
  );
};

export default MemberCard;

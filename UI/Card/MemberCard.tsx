import { Box, Center, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./IdolCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { IdolGroupType } from "@/utils/interface/interface";

interface IdolCardProps {
  data: IdolGroupType | any;
}

const MemberCard = ({ data }: IdolCardProps) => {
  const router = useRouter();

  const idolCardHandler = (groupName: string) => {
    router.push(`/groupmember?group=${groupName}`);
  };
  return (
    <Box
      textAlign="center"
      w={["40%", "30%", "22%"]}
      className={styles.idolBox}
      pos={"relative"}
    >
      <Image
        src={data?.idol_profile}
        alt="아티스트 이미지"
        width={10000}
        height={10000}
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
        opacity={".6"}
        justifyContent={"center"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        borderRadius={"20%"}
        fontSize={"1.2rem"}
        cursor={"pointer"}
        color={"white"}
      >
        <Text>자세히 보러가기</Text>
        <HStack spacing={3} marginTop={3}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
        </HStack>
      </Center>
      <Text
        paddingTop={"20px"}
        margin={0}
        fontSize={["lg", "xl", "2xl"]}
        letterSpacing="-0.19px"
        cursor={"pointer"}
      >
        {data.idol_name_kr || data.groupname}
      </Text>
      <Text
        margin={0}
        fontSize={["lg", "xl", "2xl"]}
        letterSpacing="-0.19px"
        color={"#888888"}
      >
        {data.idol_name_en}
      </Text>
    </Box>
  );
};

export default MemberCard;
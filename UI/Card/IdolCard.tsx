import { Box, HStack, Text } from "@chakra-ui/react";
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

const IdolCard = ({ data }: IdolCardProps) => {
  const router = useRouter();

  const idolCardHandler = () => {
    const idol = data.groupname || data.idol_name_en;

    const url = data.groupname
      ? `/groupmember?group=${idol}`
      : `/solo?idol=${idol}`;
    router.push(url);
  };

  return (
    <Box
      onClick={() => idolCardHandler()}
      textAlign="center"
      margin="30px 0"
      w={["24%", "24%", "23%"]}
      className={styles.idolBox}
      pos={"relative"}
    >
      <Image
        src={data?.group_profile || data?.solo_profile || data?.idol_profile}
        alt="아티스트 이미지"
        width={10000}
        height={10000}
        loading="lazy"
        className={styles.groupImg}
      />
      <Box
        className={styles.textBox}
        pos={"absolute"}
        top={0}
        aspectRatio={1 / 1}
        margin={"0 auto"}
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
        <Text>자세히 보러가기</Text>
        <HStack spacing={3} marginTop={3}>
          {/* <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} /> */}
        </HStack>
      </Box>
      <Text
        paddingTop={"20px"}
        margin={0}
        fontSize="1.6vw"
        letterSpacing="-0.19px"
        cursor={"pointer"}
      >
        {data.idol_name_kr || data.groupname}
      </Text>
      <Text
        margin={0}
        fontSize="1.6vw"
        letterSpacing="-0.19px"
        color={"#888888"}
      >
        {data.idol_name_en}
      </Text>
    </Box>
  );
};

export default IdolCard;

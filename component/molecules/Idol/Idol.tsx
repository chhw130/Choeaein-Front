import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./IdolCard.module.scss";
import { IdolGroupType } from "@/utils/interface/interface";
import Link from "next/link";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface IdolProps {
  data: IdolGroupType | any;
}

const Idol = ({ data }: IdolProps) => {
  const idol = data.groupname || data.idol_name_en;

  const url = data.groupname
    ? `/groupmember?group=${idol}`
    : `/solo?idol=${idol}`;

  return (
    <Box
      textAlign="center"
      as="article"
      margin="30px 0"
      w={["40%", "24%", "23%"]}
      className={styles.idolBox}
      pos={"relative"}
      bg={"transparent"}
      shadow={"none"}
    >
      <Link href={url}>
        <Image
          src={data?.group_profile || data?.solo_profile || data?.idol_profile}
          alt="아티스트 이미지"
          width={300}
          height={300}
          quality={100}
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
          <TextAtom>자세히 보러가기</TextAtom>
        </Box>
      </Link>
      <TextAtom
        paddingTop={"20px"}
        margin={1}
        fontSize={["16px", "17px", "20px"]}
        letterSpacing="-0.19px"
        cursor={"pointer"}
      >
        {data.idol_name_kr || data.groupname}
      </TextAtom>
      <TextAtom
        margin={0}
        fontSize={["14px", "15px", "18px"]}
        letterSpacing="-0.19px"
        color={"#888888"}
      >
        {data.idol_name_en}
      </TextAtom>
    </Box>
  );
};

export default Idol;

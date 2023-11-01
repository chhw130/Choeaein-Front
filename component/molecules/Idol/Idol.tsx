import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "./Idol.module.scss";
import TextAtom from "@/component/atoms/Text/TextAtom";
import { imgPlaceholder } from "@/utils/data/ClientData";

interface IdolProps {
  groupname?: string;
  idol_name_en?: string;
  group_profile?: string;
  solo_profile?: string;
  idol_name_kr?: string;
}

const Idol = ({
  groupname,
  idol_name_en,
  idol_name_kr,
  solo_profile,
  group_profile,
}: IdolProps) => {
  const idol = groupname || idol_name_en;
  const idolProfile: any = group_profile || solo_profile;

  const url = groupname ? `/groupmember?group=${idol}` : `/solo?idol=${idol}`;

  return (
    <Box
      textAlign="center"
      as="article"
      margin="3% 0"
      w={["40%", "24%", "23%"]}
      className={styles.idolBox}
      pos={"relative"}
      bg={"transparent"}
      shadow={"none"}
    >
      <Box as="a" href={url}>
        {idolProfile && (
          <Image
            src={idolProfile}
            alt="아티스트 이미지"
            width={300}
            height={300}
            quality={100}
            loading="lazy"
            className={styles.groupImg}
            placeholder="blur"
            blurDataURL={imgPlaceholder}
          />
        )}
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
          cursor={"pointer"}
          color={"white"}
        >
          <TextAtom fontSize={["4vw", "1.8vw", "1.4vw"]}>
            자세히 보러가기
          </TextAtom>
        </Box>
      </Box>
      <TextAtom
        margin={1}
        fontSize={["1rem", "1.2rem", "1.5rem"]}
        letterSpacing="-0.19px"
        cursor={"pointer"}
      >
        {idol_name_kr || groupname}
      </TextAtom>
      <TextAtom
        margin={0}
        fontSize={["1rem", "1rem", "1.2rem"]}
        letterSpacing="-0.19px"
        color={"#888888"}
      >
        {idol_name_en}
      </TextAtom>
    </Box>
  );
};

export default Idol;

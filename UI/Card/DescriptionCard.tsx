import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "./DescriptionCard.module.scss";
import AlbumCarousel from "../Carousel/AlbumCarousel";
import { albumType } from "@/utils/interface/interface";
import Link from "next/link";

interface DescriptionCardProps {
  albumData: albumType[];
  idolData: any;
}

const DescriptionCard = ({ albumData, idolData }: DescriptionCardProps) => {
  const idolImg = idolData?.group_profile || idolData.solo_profile;
  const name = idolData?.groupname || idolData.idol_name_kr;
  const debut = idolData.group_debut || idolData.solo_debut;
  const instaLink = idolData.group_insta || idolData.solo_insta;
  const youtubeLink = idolData.group_youtube || idolData.solo_youtube;

  return (
    <Card
      as="article"
      w={["100%", "100%", "90%"]}
      h={"100%"}
      padding={5}
      borderLeft={"8px solid black"}
      flexDir={["column", "column", "row"]}
      justifyContent={"space-around"}
    >
      {idolImg && (
        <Image
          src={idolImg}
          className={styles.groupImg}
          alt="아티스트 이미지"
          width={1000}
          height={1000}
          priority
          blurDataURL="blur"
        />
      )}
      <Stack w={["100%", "100%", "50%"]}>
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <Text fontSize={["xl", "2xl", "4xl"]}>{name}</Text>
            <HStack>
              <Text as={"a"} href={instaLink} target="_blank" width={"40px"}>
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </Text>
              <Text as={"a"} href={youtubeLink} target="_blank" width={"40px"}>
                <FontAwesomeIcon icon={faYoutube} size="2xl" />
              </Text>
              <Link href={`/calendar?idol=${idolData?.idol_name_en}`}>
                <Button>스케줄 보러가기</Button>
              </Link>
            </HStack>
          </Flex>
          <Text fontSize={["md", "xl", "2xl"]}>{idolData.enter}</Text>
          <Text>Debut : {debut}</Text>
        </CardHeader>
        <CardBody>
          <AlbumCarousel albumData={albumData} />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default DescriptionCard;

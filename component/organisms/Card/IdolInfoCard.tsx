"use client";

import {
  Card,
  CardBody,
  CardFooter,
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
import styles from "./IdolInfoCard.module.scss";
import AlbumCarousel from "../../molecules/Carousel/AlbumCarousel";
import { AlbumType } from "@/utils/interface/interface";
import Link from "next/link";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface IdolInfoCardProps {
  albumData: AlbumType[];
  profile: string;
  name: string;
  enName?: string;
  debut: string;
  instaLink: string;
  youtubeLink: string;
  enter: string;
}

const IdolInfoCard = ({
  albumData,
  profile,
  name,
  enName,
  debut,
  instaLink,
  youtubeLink,
  enter,
}: IdolInfoCardProps) => {
  return (
    <Card
      as="article"
      w={["100%", "100%", "90%"]}
      maxW={"1365px"}
      h={"100%"}
      borderLeft={"8px solid black"}
      flexDir={["column", "column", "row"]}
      justifyContent={"space-around"}
      alignItems={"center"}
      margin={"0 auto"}
      padding={3}
    >
      {profile && (
        <Image
          src={profile}
          className={styles.groupImg}
          alt="아티스트 이미지"
          width={1000}
          height={1000}
          priority
          blurDataURL="blur"
        />
      )}
      <Stack w={["100%", "100%", "53%"]}>
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <TextAtom fontSize={["xl", "2xl", "4xl"]}>{name}</TextAtom>
            <HStack>
              <Link href={instaLink}>
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </Link>
              <Link href={youtubeLink}>
                <FontAwesomeIcon icon={faYoutube} size="2xl" />
              </Link>
              <Link prefetch={true} href={`/calendar?idol=${enName}`}>
                {enName && <ButtonAtom>스케줄 보러가기</ButtonAtom>}
              </Link>
            </HStack>
          </Flex>
          <TextAtom fontSize={["md", "xl", "2xl"]}>{enter}</TextAtom>
          <TextAtom>Debut : {debut}</TextAtom>
        </CardHeader>
        <CardBody>
          <AlbumCarousel albumData={albumData} />
        </CardBody>
        <CardFooter />
      </Stack>
    </Card>
  );
};

export default IdolInfoCard;

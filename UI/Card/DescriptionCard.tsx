import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "./DescriptionCard.module.scss";
import { GroupContainerProps } from "@/component/groupMemberPage/GroupContainer";
import AlbumCarousel from "../Carousel/AlbumCarousel";

const DescriptionCard = ({
  groupMemberData,
  albumData,
}: GroupContainerProps) => {
  return (
    <Card
      as="article"
      w={["100%", "100%", "90%"]}
      h={"100%"}
      padding={5}
      borderLeft={"8px solid black"}
      borderRadius={0}
      variant={"outline"}
      flexDir={["column", "column", "row"]}
      justifyContent={"space-between"}
    >
      {groupMemberData?.group_profile && (
        <Image
          src={groupMemberData?.group_profile}
          className={styles.groupImg}
          alt="아티스트 이미지"
          width={1000}
          height={1000}
          priority
        />
      )}
      <Stack w={["100%", "100%", "50%"]}>
        <CardHeader>
          <Text fontSize={["md", "xl", "2xl"]}>{groupMemberData.enter}</Text>
          <Text fontSize={["xl", "2xl", "4xl"]}>
            {groupMemberData.groupname}
          </Text>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text>데뷔 : {groupMemberData.group_debut}</Text>
            <Flex>
              <Text
                as={"a"}
                href={groupMemberData.group_insta}
                target="_blank"
                width={"40px"}
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </Text>
              <Text
                as={"a"}
                href={groupMemberData.group_youtube}
                target="_blank"
                width={"40px"}
              >
                <FontAwesomeIcon icon={faYoutube} size="2xl" />
              </Text>
            </Flex>
          </Stack>
          <AlbumCarousel albumData={albumData} />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default DescriptionCard;

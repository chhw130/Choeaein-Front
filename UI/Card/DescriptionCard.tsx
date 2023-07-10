import {
  Box,
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

const DescriptionCard = ({
  groupMemberData,
  albumData,
}: GroupContainerProps) => {
  const album = albumData.albums;
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
      <Stack w={["100%", "100%", "45%"]}>
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

          <Flex width={"300px"} height={"100px"} pos={"relative"}>
            {album.map((data: any) => {
              return (
                <Box width={"400px"}>
                  <Image
                    key={data.pk}
                    src={data.album_cover}
                    alt="아티스트 이미지"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </Box>
              );
            })}
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default DescriptionCard;

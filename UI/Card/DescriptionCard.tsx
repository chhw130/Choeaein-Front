import { GroupType } from "@/utils/interface/interface";
import { Card, CardBody, CardHeader, Stack, Text } from "@chakra-ui/react";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DescriptionCard = ({
  groupMemberData,
}: {
  groupMemberData: GroupType;
}) => {
  return (
    <Card
      as="article"
      w={"400px"}
      h={"100%"}
      padding={5}
      borderLeft={"8px solid black"}
      borderRadius={0}
    >
      <CardHeader>
        <Text>{groupMemberData.enter}</Text>
        <Text fontSize={"5xl"}>{groupMemberData.groupname}</Text>
      </CardHeader>
      <CardBody>
        <Stack spacing={2}>
          <Text>데뷔 : {groupMemberData.group_debut}</Text>
          <a href={groupMemberData.group_insta} target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={groupMemberData.group_youtube} target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DescriptionCard;

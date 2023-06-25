import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const DescriptionCard = () => {
  return (
    <Card
      as="article"
      w={"50%"}
      h={"100%"}
      padding={5}
      borderLeft={"8px solid black"}
      borderRadius={0}
    >
      <CardHeader>
        <Text>(소속사)</Text>
        <Text>이름feqwfqw()</Text>
      </CardHeader>
      <CardBody>
        <Stack spacing={2}>
          <Text>데뷔일</Text>
          <Text>인스타</Text>
          <Text>유튜브</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DescriptionCard;

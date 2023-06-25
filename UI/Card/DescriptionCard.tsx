import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const DescriptionCard = () => {
  return (
    <Card as="article" w={"60%"}>
      <CardBody>
        <Stack spacing={2}>
          <Box>
            <Heading size="md">이름</Heading>
            <Text>소속사</Text>
          </Box>
          <Text>데뷔일</Text>
          <Text>인스타</Text>
          <Text>유튜브</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DescriptionCard;

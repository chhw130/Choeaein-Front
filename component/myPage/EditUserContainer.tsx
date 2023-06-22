"use client";

import useIdol from "@/utils/hook/useIdol";
import { Box, Center, Skeleton, Spinner, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const EditUser = dynamic(() => import("./EditUser"), {
  loading: () => (
    <Skeleton h="600px">
      <Center position="absolute" top={400} left={680}>
        <Spinner size="xl" />
      </Center>
    </Skeleton>
  ),
});

const EditUserContainer = () => {
  const { idolData } = useIdol();

  console.log(idolData);

  return (
    <Box w={["95%", "80%", "50%"]} padding="100px 0" margin="0 auto">
      <Text fontSize={["20px", "25px", "30px"]} fontWeight="800" margin="10px">
        회원정보 수정
      </Text>
      <EditUser />
    </Box>
  );
};

export default EditUserContainer;

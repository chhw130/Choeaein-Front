"use client";

import EditUserImg from "./EditUserImg";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import ModifyPassword from "./UI/ModifyPassword";
import ModifyPick from "./UI/ModifyPick";

const EditUser = () => {
  return (
    <Box w={["95%", "80%", "50%"]} padding="100px 0" margin="0 auto">
      <Text fontSize={["20px", "25px", "30px"]} fontWeight="800" margin="10px">
        회원정보 수정
      </Text>
      <Box marginTop="30px">
        <EditUserImg />
        <hr />
        <VStack
          padding="30px 0"
          margin=" 0 auto"
          fontSize={["12px", "13px", "15px"]}
          spacing={6}
        >
          <ModifyPick />
          <Flex justifyContent="space-between" width="80%" height="40px">
            <HStack spacing={5}>
              <Text w="60px">아이디</Text>
              <Text>{"email"}</Text>
            </HStack>
          </Flex>
          <ModifyPassword />
          <Flex justifyContent="space-between" width="80%" height="40px">
            <HStack spacing={5}>
              <Text w={"60px"}>별명</Text>
              <Text>{"nickname"}</Text>
            </HStack>
            <Button>수정</Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default EditUser;

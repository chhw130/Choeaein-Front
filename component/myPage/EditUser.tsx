"use client";

import { useForm } from "react-hook-form";
import styles from "./EditUser.module.scss";
import EditUserImg from "./EditUserImg";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ModifyPassword from "./UI/ModifyPassword";

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
          <Flex justifyContent="space-between" width="80%" height="100px">
            <HStack spacing={5}>
              <Text w="60px" fontWeight={"bold"}>
                최애
              </Text>
              <Avatar
                size={"xl"}
                src="https://a-static.besthdwallpaper.com/karina-from-aespa-life-s-too-short-mv-photoshoot-girls-album-wallpaper-1920x1080-100897_48.jpg"
              />
            </HStack>
          </Flex>
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

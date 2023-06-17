"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../../public/img/logo_main.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FindID = () => {
  const { register } = useForm();
  return (
    <Flex height={"100vh"}>
      <Center margin={"30px"} width={"100%"} flexDir={"column"}>
        <HStack margin={"30px"}>
          <Image
            src={logo}
            alt="최애돌"
            width={50}
            height={50}
            priority={true}
          />
          <Text fontSize="50px" fontWeight="bold">
            CHOEAEIN
          </Text>
        </HStack>

        <Box as="form" w={"100%"} maxW={"360px"}>
          <VStack spacing={8}>
            <FormControl id="name">
              <FormLabel fontWeight="semibold">이름</FormLabel>
              <Input
                h="50px"
                type="text"
                {...register("name", { required: true })}
                placeholder="이름을 입력하세요"
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel fontWeight="semibold">이메일</FormLabel>
              <Input
                h="50px"
                type="email"
                {...register("email", { required: true })}
                placeholder="이메일을 입력하세요"
              />
            </FormControl>

            <FormControl id="phone_number">
              <FormLabel fontWeight="semibold">전화번호</FormLabel>
              <InputGroup>
                <InputLeftAddon
                  h="50px"
                  pointerEvents="none"
                  children={<FontAwesomeIcon icon={faPhone} />}
                />
                <Input
                  h="50px"
                  type="number"
                  {...register("phone_number", { required: true })}
                  placeholder="전화번호를 입력하세요"
                />
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              w={"100%"}
              bg="#f89598"
              color="white"
              _hover={{ bg: "#e0797b" }}
            >
              아이디 찾기
            </Button>
            {/* {id ? (
          <Flex flexDir="row" fontSize="2xl">
            아이디는 &nbsp;
            <Box color="red" fontWeight="bold">
              "{id}"
            </Box>
            &nbsp;입니다.
          </Flex>
        ) : null} */}
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
};

export default FindID;

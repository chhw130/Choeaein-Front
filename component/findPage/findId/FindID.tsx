"use client";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
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
import FindButton from "@/UI/Button/FindButton";
import MainLogo from "@/UI/Logo/MainLogo";

const FindID = () => {
  const { register } = useForm();
  return (
    <Flex height={"100vh"}>
      <Center margin={"30px"} width={"100%"} flexDir={"column"}>
        <MainLogo />

        <Box as="form" w={"100%"}>
          <VStack spacing={7} maxW="500px" margin="0 auto">
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
            <FindButton />
            {true ? (
              <Flex flexDir="row" fontSize="2xl">
                아이디는 &nbsp;
                <Box color="red" fontWeight="bold">
                  {/* "{id}" */}" fqw "
                </Box>
                &nbsp;입니다.
              </Flex>
            ) : null}
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
};

export default FindID;

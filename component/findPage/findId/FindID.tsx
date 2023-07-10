"use client";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import FindButton from "@/UI/Button/FindButton";
import MainLogo from "@/UI/Logo/MainLogo";
import { useMutation } from "@tanstack/react-query";
import { findID } from "@/utils/API/CSRSetting";

const FindID = () => {
  const { register, handleSubmit } = useForm();

  const { mutateAsync: findIdHandler, data: idData } = useMutation(
    (data: any) => findID(data)
  );

  const submitHandler = async (data: any) => {
    await findIdHandler(data);
  };

  console.log(idData);

  return (
    <Flex height={"100vh"}>
      <Center margin={"30px"} width={"100%"} flexDir={"column"}>
        <MainLogo />

        <Box as="form" w={"100%"} onSubmit={handleSubmit(submitHandler)}>
          <VStack spacing={7} maxW="500px" margin="0 auto">
            <FormControl id="nickname">
              <FormLabel fontWeight="semibold">이름</FormLabel>
              <Input
                h="50px"
                type="text"
                {...register("nickname", { required: true })}
                placeholder="이름을 입력하세요"
              />
            </FormControl>

            <FormControl id="phone">
              <FormLabel fontWeight="semibold">전화번호</FormLabel>
              <InputGroup>
                <InputLeftAddon
                  h="50px"
                  pointerEvents="none"
                  children={<FontAwesomeIcon icon={faPhone} />}
                />
                <Input
                  h="50px"
                  type="phone"
                  {...register("phone", { required: true })}
                  placeholder="전화번호를 입력하세요"
                />
              </InputGroup>
            </FormControl>
            <FindButton />
            {idData ? (
              <Flex flexDir="row" fontSize="2xl">
                아이디는 &nbsp;
                <Box color="red" fontWeight="bold">
                  " {idData.ID} "
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

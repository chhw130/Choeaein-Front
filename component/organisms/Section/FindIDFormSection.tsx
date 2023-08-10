"use client";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import MainLogo from "@/component/atoms/Logo/MainLogo";
import InputAtom from "@/component/atoms/Input/InputAtom";
import Form from "@/component/molecules/Form/Form";
import { UseMutateAsyncFunction } from "@tanstack/react-query";

export interface FindIDFormType {
  nickname: string;
  phone: string;
}

interface FindIDFormSectionProps {
  findIdHandler: UseMutateAsyncFunction<any, unknown, FindIDFormType, unknown>;
}

const FindIDFormSection = ({ findIdHandler }: FindIDFormSectionProps) => {
  const { register, handleSubmit } = useForm<FindIDFormType>();

  const submitHandler = async (data: FindIDFormType) => {
    await findIdHandler(data);
  };

  return (
    <Center
      as="section"
      alignItems={"center"}
      width={"100%"}
      paddingTop={"2rem"}
      flexDir={"column"}
    >
      <MainLogo width={40} height={40} fontSize={[20, 20, 30]} />
      <Form
        flexDir={"column"}
        w={"90%"}
        maxW="500px"
        onSubmit={handleSubmit(submitHandler)}
      >
        <VStack spacing={7} maxW="500px" w={"100%"} margin="0 auto">
          <FormControl id="nickname">
            <FormLabel fontWeight="semibold">이름</FormLabel>
            <InputAtom
              h="50px"
              type="text"
              register={{ ...register("nickname", { required: true }) }}
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
              <InputAtom
                h="50px"
                type="phone"
                register={{ ...register("phone", { required: true }) }}
                placeholder="전화번호를 입력하세요"
              />
            </InputGroup>
          </FormControl>
          <ButtonAtom
            type="submit"
            w={"100%"}
            h={"50px"}
            bg="#f89598"
            color="white"
            _hover={{ bg: "#e0797b" }}
          >
            아이디 찾기
          </ButtonAtom>
        </VStack>
      </Form>
    </Center>
  );
};

export default FindIDFormSection;

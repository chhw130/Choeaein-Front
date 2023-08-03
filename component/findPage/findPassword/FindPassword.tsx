"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import MainLogo from "@/component/atoms/Logo/MainLogo";

const FindPassword = () => {
  const { register } = useForm();
  return (
    <>
      <Flex height={"100vh"}>
        <Center margin={"30px"} width={"100%"} flexDir={"column"}>
          <MainLogo />
          <Box
            as="form"
            // onSubmit={handleSubmit(onSubmit)}
            marginTop="55px"
            width="100%"
          >
            <VStack spacing={7} maxW="500px" margin="0 auto">
              <InputGroup>
                <InputLeftAddon
                  h="50px"
                  children={<FontAwesomeIcon icon={faEnvelope} />}
                />
                <Input
                  //   isDisabled={password}
                  h="50px"
                  type="text"
                  {...register("username", { required: true })}
                  placeholder="아이디을 입력하세요"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon
                  children={<FontAwesomeIcon icon={faUser} />}
                  h="50px"
                />
                <Input
                  //   isDisabled={password}
                  h="50px"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="이름을 입력하세요"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon
                  children={<FontAwesomeIcon icon={faPhone} />}
                  h="50px"
                />

                <Input
                  h="50px"
                  //   isDisabled={password}
                  type="number"
                  {...register("phone_number", { required: true })}
                  placeholder="전화번호를 입력하세요"
                />
              </InputGroup>
              {true ? (
                <VStack w={"100%"}>
                  <ButtonAtom
                    type="submit"
                    w={"100%"}
                    h={"50px"}
                    bg="#f89598"
                    color="white"
                    _hover={{ bg: "#e0797b" }}
                  >
                    비밀번호 찾기
                  </ButtonAtom>
                </VStack>
              ) : (
                <VStack spacing={"6"} w={"100%"} alignItems="flex-start">
                  <InputGroup>
                    <InputLeftAddon children={<Box>1</Box>} />
                    <Input
                      {...register("password", { required: true })}
                      //   type={firstVisible ? "text" : "password"}
                      placeholder="비밀번호를 재설정하세요"
                    />
                    <InputRightAddon
                      children={
                        <Box
                          color="gray.500"
                          cursor={"pointer"}
                          //   onClick={() => setFirstVisible(!firstVisible)}
                        >
                          1
                        </Box>
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon
                      children={<FontAwesomeIcon icon={faLock} />}
                    />
                    <Input
                      {...register("check_password", { required: true })}
                      //   type={secondVisible ? "text" : "password"}
                      placeholder="비밀번호를 확인"
                    />
                    <InputRightAddon
                      children={
                        <Box
                          color="gray.500"
                          cursor={"pointer"}
                          //   onClick={() => setSecondVisible(!secondVisible)}
                        >
                          1
                        </Box>
                      }
                    />
                  </InputGroup>
                  <Button
                    type="submit"
                    w={"100%"}
                    backgroundColor="#ff404c"
                    color="white"
                    //   isLoading={newPasswordMutation.isLoading}
                  >
                    비밀번호 재설정
                  </Button>
                  {/* {error ? <Text>{error}</Text> : null} */}
                </VStack>
              )}
            </VStack>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default FindPassword;

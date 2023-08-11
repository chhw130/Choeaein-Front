"use client";
import {
  Box,
  Center,
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
import Form from "@/component/molecules/Form/Form";
import InputAtom from "@/component/atoms/Input/InputAtom";

const FindPassword = () => {
  const { register } = useForm();
  return (
    <>
      <Center
        alignItems={"center"}
        width={"100%"}
        paddingTop={"2rem"}
        flexDir={"column"}
      >
        <MainLogo width={60} height={60} fontSize={[10, 20, 30]} />

        <Form
          // onSubmit={handleSubmit(onSubmit)}
          flexDir={"column"}
          w={"90%"}
          maxW="500px"
        >
          <VStack spacing={7} maxW="500px" w={"100%"} margin="0 auto">
            <InputGroup>
              <InputLeftAddon
                h="50px"
                children={<FontAwesomeIcon icon={faEnvelope} />}
              />
              <InputAtom
                //   isDisabled={password}
                h="50px"
                type="text"
                register={{ ...register("username", { required: true }) }}
                placeholder="아이디을 입력하세요"
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon
                children={<FontAwesomeIcon icon={faUser} />}
                h="50px"
              />
              <InputAtom
                //   isDisabled={password}
                h="50px"
                type="text"
                register={{ ...register("name", { required: true }) }}
                placeholder="이름을 입력하세요"
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon
                children={<FontAwesomeIcon icon={faPhone} />}
                h="50px"
              />

              <InputAtom
                h="50px"
                //   isDisabled={password}
                type="number"
                register={{ ...register("phone_number", { required: true }) }}
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
                  <InputAtom
                    register={{ ...register("password", { required: true }) }}
                    //   type={firstVisible ? "text" : "password"}
                    placeholder="비밀번호를 재설정하세요"
                  />
                  <InputRightAddon
                    children={
                      <Box
                        color="gray.500"
                        cursor={"pointer"}
                        //   onClick={() => setFirstVisible(!firstVisible)}
                      ></Box>
                    }
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon
                    children={<FontAwesomeIcon icon={faLock} />}
                  />
                  <InputAtom
                    register={{
                      ...register("check_password", { required: true }),
                    }}
                    //   type={secondVisible ? "text" : "password"}
                    placeholder="비밀번호를 확인"
                  />
                  <InputRightAddon
                    children={
                      <Box
                        color="gray.500"
                        cursor={"pointer"}
                        //   onClick={() => setSecondVisible(!secondVisible)}
                      ></Box>
                    }
                  />
                </InputGroup>
                <ButtonAtom
                  type="submit"
                  w={"100%"}
                  backgroundColor="#ff404c"
                  color="white"
                  //   isLoading={newPasswordMutation.isLoading}
                >
                  비밀번호 재설정
                </ButtonAtom>
                {/* {error ? <Text>{error}</Text> : null} */}
              </VStack>
            )}
          </VStack>
        </Form>
      </Center>
    </>
  );
};

export default FindPassword;

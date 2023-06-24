"use client";

import { useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { postLogin } from "@/utils/axios/AxiosSetting";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { useToast } from "@/UI/Toast/useToast";
import MainLogo from "@/UI/Logo/MainLogo";
import { LoginData } from "@/utils/interface/interface";
import useUser from "@/utils/hook/useUser";
import { useEffect } from "react";

const UserLogin = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const { isLoading, isLogin, userData } = useUser();

  useEffect(() => {
    if (!isLoading && isLogin) router.push("/");
  }, [isLoading, isLogin, userData]);

  const { mutateAsync: loginHandler, isLoading: loginLoading } = useMutation(
    (loginData: LoginData) => postLogin(loginData),
    {
      onError: () => {
        useToast("ID또는 Password가 틀렸습니다.", colorMode, "error");
      },
      onSuccess: () => {
        router.push("/");
        useToast("로그인 성공!!", colorMode, "info");
      },
    }
  );

  /**로그인 form을 제출했을 때*/
  const onSubmit = async (loginData: LoginData) => {
    await loginHandler(loginData);
  };

  return (
    <>
      <Flex as={"section"} height="100vh">
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          width={"100%"}
          maxW={"500px"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"30px auto"}
        >
          <MainLogo />
          <Input
            w={"90%"}
            h={"70px"}
            fontSize={"1rem"}
            margin={2}
            placeholder="UserEmail"
            {...register("email", {
              required: "ID를 입력해주세요.",
            })}
          />
          <Input
            w={"90%"}
            h={"70px"}
            fontSize={"1rem"}
            margin={2}
            placeholder="Password"
            type="password"
            autoComplete="off"
            {...register("password", {
              required: "Password를 입력해주세요.",
            })}
          />

          <Stack spacing="6" w="90%" maxW="450px" marginTop={5}>
            {(errors.email && (
              <Text color={"#bf1650"}>⚠ {errors.email.message}</Text>
            )) ||
              (errors.password && (
                <Text color={"#bf1650"}>⚠ {errors.password.message}</Text>
              ))}
            <ButtonGroup marginTop="10px" justifyContent="center" w="100%">
              <Button
                w="50%"
                h="50px"
                onClick={() => {
                  router.push("/");
                }}
                type="button"
              >
                홈으로
              </Button>
              <Button
                w="50%"
                h="50px"
                type="submit"
                color="white"
                bg="#f89598"
                isLoading={loginLoading}
                _hover={{ bg: "#e0797b" }}
              >
                로그인
              </Button>
            </ButtonGroup>
            <HStack fontSize={"sm"} w={"100%"}>
              <HStack w="100%" justifyContent={"center"}>
                <Link href="/findID">
                  <Text>아이디 찾기</Text>
                </Link>
                <Text color={"gray.300"}>|</Text>
                <Link href="/findpassword">비밀번호 찾기</Link>
                <Text color={"gray.300"}>|</Text>
                <Link href={"/signup"}>회원가입</Link>
              </HStack>
            </HStack>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default UserLogin;

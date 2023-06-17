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
import { LoginData } from "@/app/login/interface";
import { useMutation } from "@tanstack/react-query";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import Image from "next/image";
import logo from "../../public/img/logo_main.png";
import { useToast } from "@/UI/Toast/useToast";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const { colorMode } = useColorMode();

  const router = useRouter();

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
      <Flex height="100vh">
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
                  router.back();
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

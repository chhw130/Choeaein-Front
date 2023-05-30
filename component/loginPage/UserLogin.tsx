"use client";

import styles from "./UserLogin.module.scss";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { postLogin } from "@/utils/axios/AxiosSetting";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginData } from "@/app/login/interface";
import { useMutation } from "@tanstack/react-query";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import Image from "next/image";

const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const router = useRouter();

  const { mutateAsync: loginHandler } = useMutation((loginData: LoginData) =>
    postLogin(loginData)
  );

  /**로그인 form을 제출했을 때*/
  const onSubmit = async (loginData: LoginData) => {
    await loginHandler(loginData);
  };

  return (
    <div className={styles.logInDiv}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.logInForm}>
        <Image
          src="https://velog.velcdn.com/images/view_coding/post/6e4d7220-8bc8-4e88-9d4b-f3dd9e09b523/image.png"
          alt="최애돌"
          width={300}
          height={80}
          className={styles.mainImg}
        />
        <Input
          className={styles.logInInput}
          placeholder="UserEmail"
          {...register("email", {
            required: "ID를 입력해주세요.",
          })}
        />
        <Input
          className={styles.logInInput}
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password를 입력해주세요.",
          })}
        />
        <div className={styles.errorMessage}>
          {(errors.email && <p>{errors.email.message}</p>) ||
            (errors.password && <p>{errors.password.message}</p>)}
        </div>

        <Stack spacing="6" w="90%" maxW="450px" marginTop={5}>
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
            <Button w="50%" h="50px" type="submit" color="white" bg="#f89598">
              로그인
            </Button>
          </ButtonGroup>
          <HStack fontSize={"sm"} w={"100%"}>
            <HStack w="100%" justifyContent={"center"}>
              <Link href="user/findId">
                <Text>아이디 찾기</Text>
              </Link>
              <Text color={"gray.300"}>|</Text>
              <Link href="user/findPassword">비밀번호 찾기</Link>
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
      </form>
    </div>
  );
};

export default UserLogin;

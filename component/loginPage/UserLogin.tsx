"use client";

import styles from "./UserLogin.module.scss";
import { useForm } from "react-hook-form";
// import choeImg from "/img/logo_main.png";
import {
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
// import { postLogin } from "../../../axios-settings/Axios";
import { postLogin } from "@/utils/axios/AxiosSetting";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginData } from "@/app/login/interface";
import { useMutation } from "@tanstack/react-query";
import { OAuthButtonGroup } from "./OAuthButtonGroup";

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
        {/* <img className={styles.mainImg} src={choeImg} alt="" /> */}
        <h1>로그인</h1>
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
        <div className={styles.goSignUp}>
          <Link href={"/signup"} prefetch={false}>
            <Button bg="transparent" type="button">
              Not user?
            </Button>
          </Link>
        </div>
        <ButtonGroup marginTop="10px">
          <Button
            w="150px"
            h="50px"
            onClick={() => {
              router.back();
            }}
            type="button"
          >
            홈으로
          </Button>
          <Button
            w="150px"
            h="50px"
            type="submit"
            color="white"
            colorScheme="twitter"
          >
            로그인
          </Button>
        </ButtonGroup>
        <Stack spacing="6" w="80%" marginTop={5}>
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

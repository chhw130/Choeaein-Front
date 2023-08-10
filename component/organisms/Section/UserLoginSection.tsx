"use client";

import { useForm } from "react-hook-form";
import { Flex, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { LoginData } from "@/utils/interface/interface";
import useUser from "@/utils/hook/useUser";
import { useEffect } from "react";
import useLogin from "@/utils/hook/useLogin";
import MainLogo from "../../atoms/Logo/MainLogo";
import InputAtom from "../../atoms/Input/InputAtom";
import LoginBtnGroup from "../../molecules/ButtonGroup/LoginBtnGroup";
import TextAtom from "../../atoms/Text/TextAtom";
import LoginNav from "../../molecules/Navigation/LoginNav";
import Form from "../../molecules/Form/Form";

const UserLoginSection = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const { isLoading, isLogin, userData } = useUser();

  /**로그인 되어있으면 home으로 라우팅 */
  useEffect(() => {
    if (!isLoading && isLogin) router.push("/");
  }, [isLoading, isLogin, userData]);

  const { loginHandler, loginLoading } = useLogin();

  /**로그인 form을 제출했을 때*/
  const onSubmit = async (loginData: LoginData) => {
    await loginHandler(loginData);
  };

  return (
    <>
      <Flex as={"section"} height="100vh">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          w={"100%"}
          maxW={"500px"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"30px auto"}
          fontFamily={"inherit"}
        >
          <>
            <MainLogo width={60} height={60} fontSize={[10, 20, 30]} />
            <InputAtom
              fontFamily={"heading"}
              w={"90%"}
              h={"70px"}
              fontSize={"1rem"}
              margin={2}
              placeholder="UserEmail"
              register={{
                ...register("email", {
                  required: "ID를 입력해주세요.",
                }),
              }}
            />
            <InputAtom
              fontFamily={"heading"}
              w={"90%"}
              h={"70px"}
              fontSize={"1rem"}
              margin={2}
              placeholder="Password"
              type="password"
              autoComplete="off"
              register={{
                ...register("password", {
                  required: "Password를 입력해주세요.",
                }),
              }}
            />

            <Stack spacing="6" w="90%" maxW="450px" marginTop={5}>
              {(errors.email && (
                <TextAtom color={"#bf1650"}>⚠ {errors.email.message}</TextAtom>
              )) ||
                (errors.password && (
                  <TextAtom color={"#bf1650"}>
                    ⚠ {errors.password.message}
                  </TextAtom>
                ))}
              <LoginBtnGroup loginLoading={loginLoading} />
              <LoginNav />
            </Stack>
          </>
        </Form>
      </Flex>
    </>
  );
};

export default UserLoginSection;

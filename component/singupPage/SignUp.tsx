"use client";
import { useForm } from "react-hook-form";
import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { postSignUp } from "@/utils/API/CSRSetting";
import { useParams, usePathname, useRouter } from "next/navigation";
import { SignUpData } from "@/utils/interface/interface";
import { useMutation } from "@tanstack/react-query";
import MainLogo from "@/UI/Logo/MainLogo";
import SignUpFormControl from "@/UI/FormControl/SignUpFormControl";

const SignUp = () => {
  const params = useParams();

  /**회원가입 확인 모달창 */
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignUpData>();

  const router = useRouter();

  const { mutateAsync: signUpHandler } = useMutation(
    (signUpInform: SignUpData) => postSignUp(signUpInform),
    {
      onSuccess: () => {},
    }
  );

  /**회원가입 form 제출시 */
  const onSubmit = async (data: SignUpData) => {
    const year = Number(data.birth?.slice(0, 4));
    const date = new Date().getFullYear();
    const age = date - year + 1;

    const signUpInform = {
      email: data.email,
      password: data.password,
      name: data.name,
      nickname: data.nickname,
      age: age,
      phone: data.phone_number,
      pick: Number(data.pick),
    };

    await signUpHandler(signUpInform);
  };

  return (
    <>
      <Box maxW={"560px"} margin={"0 auto"} padding={"80px 30px"}>
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <MainLogo />
          <SignUpFormControl
            label={"아이디(Email)"}
            inputId={"email"}
            register={{
              ...register("email", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                maxLength: {
                  value: 30,
                  message: "30자까지 입력가능합니다.",
                },
                minLength: {
                  value: 3,
                  message: "2자 이상 입력하세요.",
                },
              }),
            }}
            defaultText={"Id를 입력하세요."}
            errorMessage={errors.email}
          />

          <SignUpFormControl
            label={"비밀번호"}
            inputId={"password"}
            register={{
              ...register("password", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                minLength: {
                  value: 8,
                  message: "8자 이상 입력하세요.",
                },
                maxLength: {
                  value: 16,
                  message: "16자까지 입력가능합니다.",
                },
                pattern: {
                  value:
                    // eslint-disable-next-line
                    /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/,
                  message: "특수문자 1개 이상 넣어주세요.",
                },
              }),
            }}
            defaultText={"비밀번호를 입력해주세요."}
            errorMessage={errors.password}
          />

          <SignUpFormControl
            label={"비밀번호 확인"}
            inputId={"passwordConfirm"}
            register={{
              ...register("passwordConfirm", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                validate: {
                  check: (val) => {
                    if (getValues("password") !== val) {
                      return "비밀번호가 일치하지 않습니다.";
                    }
                  },
                },
              }),
            }}
            defaultText={"비밀번호를 확인해주세요."}
            errorMessage={errors.passwordConfirm}
          />

          <SignUpFormControl
            label={"이름"}
            inputId={"name"}
            register={{
              ...register("name", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                maxLength: {
                  value: 10,
                  message: "20자까지 입력 가능합니다.",
                },
              }),
            }}
            defaultText={"이름을 입력해주세요."}
            errorMessage={errors.name}
          />

          <SignUpFormControl
            label={"생년월일"}
            inputId={"birth"}
            register={{
              ...register("birth", {
                validate: {
                  check: (val) => {
                    if (!val) {
                      return "필수 정보입니다.";
                    }
                  },
                },
              }),
            }}
            errorMessage={errors.birth}
          />
          <SignUpFormControl
            label={"닉네임"}
            inputId={"nickname"}
            register={{
              ...register("nickname", {
                validate: {
                  check: (val) => {
                    if (!val) {
                      return "필수 정보입니다.";
                    }
                  },
                },
              }),
            }}
            errorMessage={errors.birth}
          />

          <SignUpFormControl
            label={"전화번호"}
            inputId={"phone_number"}
            register={{
              ...register("phone_number", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              }),
            }}
            errorMessage={errors.phone_number}
          />

          <SignUpFormControl
            label={"최애 선택"}
            inputId={"pick"}
            register={{
              ...register("pick"),
            }}
            errorMessage={errors.pick}
          />

          <ButtonGroup>
            <Button
              w="150px"
              h="50px"
              borderRadius="15px"
              type="button"
              onClick={() => router.back()}
            >
              뒤로
            </Button>
            <Button w="150px" h="50px" borderRadius="15px" type="submit">
              제출
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
};
export default SignUp;

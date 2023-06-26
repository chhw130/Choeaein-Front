"use client";
import styles from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { postSignUp } from "@/utils/API/CSRSetting";
import { useRouter } from "next/navigation";
import { SignUpData } from "@/utils/interface/interface";
import IdolOption from "../../UI/Select/IdolOption";
import { useMutation } from "@tanstack/react-query";
import MainLogo from "@/UI/Logo/MainLogo";

const SignUp = () => {
  /**회원가입 확인 모달창 */
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignUpData>();
  const router = useRouter();

  const { mutateAsync: signUpHandler } = useMutation(
    (signUpInform: SignUpData) => postSignUp(signUpInform)
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
      pick: Number(data.pick),
    };

    await signUpHandler(signUpInform);
  };

  return (
    <>
      <section className={styles.signUp}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MainLogo />
          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="username"
              _after={{ content: `"*"`, color: "red" }}
            >
              아이디(Email)
            </FormLabel>
            <InputGroup>
              <Input
                h={"50px"}
                id="username"
                placeholder="Id를 입력하세요."
                {...register("username", {
                  required: {
                    value: true,
                    message: "필수 정보입니다.",
                  },
                  maxLength: {
                    value: 15,
                    message: "15자까지 입력가능합니다.",
                  },
                  minLength: {
                    value: 3,
                    message: "2자 이상 입력하세요.",
                  },
                })}
              />
            </InputGroup>
            {errors.username && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.username.message}
              </Text>
            )}
          </FormControl>

          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="password"
              _after={{ content: `"*"`, color: "red" }}
            >
              비밀번호
            </FormLabel>
            <Input
              h={"50px"}
              id="password"
              type="password"
              placeholder="비밀번호"
              autoComplete="off"
              {...register("password", {
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
              })}
            />
            {errors.password && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.password.message}
              </Text>
            )}
          </FormControl>
          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="passwordConfirm"
              _after={{ content: `"*"`, color: "red" }}
            >
              비밀번호
            </FormLabel>
            <Input
              h={"50px"}
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              autoComplete="off"
              {...register("passwordConfirm", {
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
              })}
            />
            {errors.passwordConfirm && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.passwordConfirm.message}
              </Text>
            )}
          </FormControl>
          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="name"
              _after={{ content: `"*"`, color: "red" }}
            >
              이름
            </FormLabel>
            <Input
              h={"50px"}
              id="name"
              placeholder="이름을 입력하세요"
              {...register("name", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                maxLength: {
                  value: 10,
                  message: "20자까지 입력 가능합니다.",
                },
              })}
            />
            {errors.name && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.name.message}
              </Text>
            )}
          </FormControl>

          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="birth"
              _after={{ content: `"*"`, color: "red" }}
            >
              생년월일
            </FormLabel>
            <Input
              h={"50px"}
              type="date"
              id="birth"
              {...register("birth", {
                validate: {
                  check: (val) => {
                    if (!val) {
                      return "필수 정보입니다.";
                    }
                  },
                },
              })}
            />
            {errors.birth && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.birth.message}
              </Text>
            )}
          </FormControl>

          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="number"
              _after={{ content: `"*"`, color: "red" }}
            >
              전화번호
            </FormLabel>
            <InputGroup>
              <InputLeftAddon
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faPhone} />}
                height="50px"
              />
              <Input
                h={"50px"}
                id="number"
                type="number"
                placeholder="전화번호를 입력하세요."
                {...register("phone_number")}
              />
            </InputGroup>
            {errors?.phone_number && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.phone_number?.message}
              </Text>
            )}
          </FormControl>

          <FormControl marginBottom={3}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="nickname"
              _after={{ content: `"*"`, color: "red" }}
            >
              전화번호
            </FormLabel>
            <Input
              h={"50px"}
              id="nickname"
              placeholder="이메일을 입력하세요"
              {...register("nickname", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
                maxLength: {
                  value: 15,
                  message: "15자까지 입력가능합니다.",
                },
                minLength: {
                  value: 3,
                  message: "2자 이상 입력하세요.",
                },
                pattern: {
                  value: /^[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/,
                  message: "공백을 제거해 주세요.",
                },
              })}
            />
            {errors.nickname && (
              <Text
                textAlign={"end"}
                color={"red"}
                fontSize={"0.9rem"}
                _before={{ content: `"⚠"` }}
              >
                {errors.nickname.message}
              </Text>
            )}
          </FormControl>
          <FormControl marginBottom={10}>
            <FormLabel
              fontWeight={"semibold"}
              htmlFor="pick"
              _after={{ content: `"*"`, color: "red" }}
            >
              최애 선택
            </FormLabel>
            <Select
              h={"50px"}
              id="pick"
              placeholder="당신의 최애를 알려주세요."
              {...register("pick", {
                required: "필수 입니다.",
              })}
            >
              <IdolOption />
            </Select>
          </FormControl>
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
        </form>
      </section>
    </>
  );
};
export default SignUp;

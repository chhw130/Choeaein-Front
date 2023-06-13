"use client";
import styles from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import {
  Button,
  ButtonGroup,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { CertificatePhone, postSignUp, test } from "@/utils/axios/AxiosSetting";
import { useRouter } from "next/navigation";
import { SignUpData } from "@/app/signup/interface";
import IdolOption from "./IdolOption";
import { useMutation, useQuery } from "@tanstack/react-query";
import sendMessageCode from "@/utils/phone/SendPhoneMessage";

const SignUp = () => {
  /**회원가입 확인 모달창 */
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignUpData>();
  const router = useRouter();

  const { data: number, mutateAsync: CertificatePhoneHandler } = useMutation(
    () => CertificatePhone()
  );

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
      <div className={styles.signUp}>
        <Image
          w="300px"
          margin="0 auto"
          padding="30px"
          alt=""
          src="https://velog.velcdn.com/images/view_coding/post/6e4d7220-8bc8-4e88-9d4b-f3dd9e09b523/image.png"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.typeDiv}>
            <label htmlFor="username">아이디(Email)</label>
            <Input
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
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className={styles.typeDiv}>
            <label htmlFor="password">비밀번호</label>
            <Input
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
                  // eslint-disable-next-line

                  message: "특수문자 1개 이상 넣어주세요.",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className={styles.typeDiv}>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <Input
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
            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
          </div>
          <div className={styles.typeDiv}>
            <label htmlFor="name">성명</label>
            <Input
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
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className={styles.typeDiv}>
            <label>생년월일</label>
            <Input
              type="date"
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
            {errors.birth && <p>{errors.birth.message}</p>}
          </div>
          <div className={styles.typeDiv}>
            <label htmlFor="number">전화번호</label>
            <InputGroup>
              <InputLeftAddon
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faPhone} />}
                height="50px"
              />
              <Input
                id="number"
                type="number"
                placeholder="전화번호를 입력하세요."
                {...register("phone_number")}
              />
              <Button h="50px" onClick={() => CertificatePhoneHandler()}>
                인증하기
              </Button>
            </InputGroup>
            {errors?.phone_number && <p>{errors.phone_number?.message}</p>}
          </div>

          <div className={styles.typeDiv}>
            <label htmlFor="email">닉네임</label>
            <Input
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
            {errors.nickname && <p>{errors.nickname.message}</p>}
          </div>
          <div className={styles.typeDiv}>
            <label>최애 등록</label>
            <Select
              placeholder="당신의 최애를 알려주세요."
              {...register("pick", {
                required: "필수 입니다.",
              })}
            >
              <IdolOption />
            </Select>
          </div>
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
      </div>
    </>
  );
};
export default SignUp;

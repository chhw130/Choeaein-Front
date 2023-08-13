"use client";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Select,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { postSignUp } from "@/utils/API/CSRSetting";
import { useRouter } from "next/navigation";
import { SignUpData } from "@/utils/interface/interface";
import { useMutation } from "@tanstack/react-query";
import MainLogo from "@/component/atoms/Logo/MainLogo";
import { toast } from "react-toastify";
import Form from "../../molecules/Form/Form";
import InputAtom from "../../atoms/Input/InputAtom";
import TextAtom from "../../atoms/Text/TextAtom";
import IdolOption from "../../atoms/Select/IdolOption";
import ButtonAtom from "../../atoms/Button/ButtonAtom";

const SignUpFormSection = () => {
  /**회원가입 확인 모달창 */
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignUpData>();

  const router = useRouter();
  const { colorMode } = useColorMode();

  const { mutateAsync: signUpHandler } = useMutation(
    (signUpInform: SignUpData) => postSignUp(signUpInform),
    {
      onSuccess: () => {
        return toast("회원가입에 성공했습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: "changePassword",
        });
      },
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
      <Box as="section" maxW={"560px"} margin={"3rem auto"} padding={"0 30px"}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          spacing={5}
        >
          <>
            <MainLogo width={40} height={40} fontSize={[20, 20, 30]} />

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"비밀번호"}
                _after={{ content: `"*"`, color: "red" }}
              >
                비밀번호
              </FormLabel>
              <InputAtom
                fontSize={["12px", "13px", "15px"]}
                id="비밀번호"
                h={"50px"}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                fontFamily={"heading"}
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
              />
              {errors.password && (
                <TextAtom
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {errors.password.message}
                </TextAtom>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"비밀번호 확인"}
                _after={{ content: `"*"`, color: "red" }}
              >
                비밀번호 확인
              </FormLabel>
              <InputAtom
                fontSize={["12px", "13px", "15px"]}
                id="비밀번호 확인"
                h={"50px"}
                type="passwordConfirm"
                placeholder="비밀번호를 다시 입력해주세요."
                fontFamily={"heading"}
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
              />
              {errors.passwordConfirm && (
                <TextAtom
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {errors.passwordConfirm.message}
                </TextAtom>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"이름"}
                _after={{ content: `"*"`, color: "red" }}
              >
                이름
              </FormLabel>
              <InputAtom
                fontSize={["12px", "13px", "15px"]}
                id="이름"
                h={"50px"}
                placeholder="이름을 입력해주세요."
                fontFamily={"heading"}
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
              />
              {errors.name && (
                <TextAtom
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {errors.name.message}
                </TextAtom>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"생년월일"}
                _after={{ content: `"*"`, color: "red" }}
              >
                생년월일
              </FormLabel>
              <InputAtom
                fontSize={["12px", "13px", "15px"]}
                id="생년월일"
                h={"50px"}
                type="date"
                fontFamily={"heading"}
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
              />
              {errors.birth && (
                <TextAtom
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {errors.birth.message}
                </TextAtom>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"닉네임"}
                _after={{ content: `"*"`, color: "red" }}
              >
                닉네임
              </FormLabel>
              <InputAtom
                fontSize={["12px", "13px", "15px"]}
                id="닉네임"
                h={"50px"}
                fontFamily={"heading"}
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
              />
              {errors.birth && (
                <TextAtom
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {errors.birth.message}
                </TextAtom>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"전화번호"}
                _after={{ content: `"*"`, color: "red" }}
              >
                전화번호
              </FormLabel>
              <InputAtom
                id="전화번호"
                type="number"
                fontSize={["12px", "13px", "15px"]}
                h={"50px"}
                fontFamily={"heading"}
                register={{
                  ...register("phone_number", {
                    required: {
                      value: true,
                      message: "필수 정보입니다.",
                    },
                  }),
                }}
              />
              {errors.phone_number && (
                <TextAtom
                  textAlign={"end"}
                  color={"red"}
                  fontSize={"0.9rem"}
                  _before={{ content: `"⚠"` }}
                >
                  {errors.phone_number.message}
                </TextAtom>
              )}
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={["12px", "13px", "15px"]}
                htmlFor={"최애 선택"}
              >
                최애
              </FormLabel>
              <Select
                fontSize={["12px", "13px", "15px"]}
                h={"50px"}
                id="pick"
                fontFamily={"heading"}
                placeholder="당신의 최애를 알려주세요."
                {...register}
              >
                <IdolOption />
              </Select>
            </FormControl>

            <ButtonGroup>
              <ButtonAtom
                w="150px"
                h="50px"
                borderRadius="15px"
                type="button"
                onClick={() => router.back()}
              >
                뒤로
              </ButtonAtom>
              <ButtonAtom w="150px" h="50px" borderRadius="15px" type="submit">
                제출
              </ButtonAtom>
            </ButtonGroup>
          </>
        </Form>
      </Box>
    </>
  );
};
export default SignUpFormSection;

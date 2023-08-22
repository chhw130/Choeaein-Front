"use client";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import { verifyEmail } from "@/utils/API/CSRSetting";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormLabel,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import InputAtom from "../../atoms/Input/InputAtom";
import VerifyEmailCautionArticle from "@/UI/Card/VerifyEmailCautionArticle";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const VerifyEmailCard = () => {
  const router = useRouter();

  const { colorMode } = useColorMode();
  const { register, handleSubmit } = useForm();

  const { mutateAsync: verifyEmailHandler, isLoading } = useMutation(
    (email: object) => verifyEmail(email),
    {
      onSuccess: () => {
        toast("이메일 전송이 완료되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: "verifyEmail",
        });
      },
      onError: () => {
        toast("이메일 전송에 실패했습니다.", {
          type: "error",
          theme: colorMode,
          autoClose: 2000,
          toastId: "verfiyEmailErr",
        });
      },
    }
  );

  const verifyEmailSubmitHandler = async (email: any) => {
    await verifyEmailHandler(email);
  };

  return (
    <Card
      as={"form"}
      onSubmit={handleSubmit(verifyEmailSubmitHandler)}
      maxW={"600px"}
      w={"90%"}
      margin={"auto auto"}
    >
      <CardHeader></CardHeader>
      <CardBody w={["90%", "80%", "80%"]} margin={"0 auto"}>
        <FormLabel htmlFor="email" fontSize={["13px", "15px", "20px"]}>
          이메일 (ID)
        </FormLabel>
        <InputGroup>
          <InputAtom
            id="email"
            register={{
              ...register("email", {
                required: {
                  value: true,
                  message: "필수 정보입니다.",
                },
              }),
            }}
          />
          <InputRightElement w={"5rem"}>
            <ButtonAtom
              type="submit"
              fontSize={["13px", "14px", "15px"]}
              h="2rem"
              isLoading={isLoading}
            >
              인증하기
            </ButtonAtom>
          </InputRightElement>
        </InputGroup>
        <VerifyEmailCautionArticle />
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <ButtonAtom
          w="50%"
          margin={"0 auto"}
          onClick={() => {
            router.push("/");
          }}
          type="button"
        >
          홈으로
        </ButtonAtom>
      </CardFooter>
    </Card>
  );
};

export default VerifyEmailCard;

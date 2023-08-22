"use client";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import InputAtom from "../../atoms/Input/InputAtom";
import VerifyEmailCautionArticle from "@/UI/Card/VerifyEmailCautionArticle";
import { useForm } from "react-hook-form";
import useVerifyEmail from "@/utils/hook/useVerifyEmail";

interface VerifyEmailType {
  email: string;
}

const VerifyEmailCard = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<VerifyEmailType>();

  const { verifyEmailHandler, isLoading } = useVerifyEmail();

  const verifyEmailSubmitHandler = async (email: VerifyEmailType) => {
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

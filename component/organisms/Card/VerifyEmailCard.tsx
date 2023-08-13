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
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import InputAtom from "../../atoms/Input/InputAtom";
import VerifyEmailCautionArticle from "@/UI/Card/VerifyEmailCautionArticle";

const VerifyEmailCard = () => {
  const router = useRouter();

  const { mutateAsync: verify } = useMutation((email: object) =>
    verifyEmail(email)
  );

  const verifyEmailHandler = async () => {
    await verify({
      email: "527coco@naver.com",
    });
  };

  return (
    <Card
      as={"section"}
      maxW={"600px"}
      w={"90%"}
      margin={"auto auto"}
      h={"70%"}
    >
      <CardHeader></CardHeader>
      <CardBody w={["90%", "80%", "80%"]} margin={"0 auto"}>
        <FormLabel htmlFor="email" fontSize={["13px", "15px", "20px"]}>
          이메일 (ID)
        </FormLabel>
        <InputGroup size={"md"}>
          <InputAtom id="email" />
          <InputRightElement w={"5rem"}>
            <ButtonAtom
              fontSize={["13px", "14px", "15px"]}
              onClick={() => verifyEmailHandler()}
              h="2rem"
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

"use client";
import GoHomeBtn from "@/UI/Button/GoHomeBtn";
import VerifyEmailCautionCard from "@/UI/Card/VerifyEmailCautionCard";
import SignupStepper from "@/UI/Stepper/SignupStepper";
import { verifyEmail } from "@/utils/API/CSRSetting";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const VerifyEmail = () => {
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
    <Box paddingTop={"6rem"} h={"100vh"} as="main">
      <Card h={"80vh"} as={"section"} maxW={"600px"} margin={"0 auto"}>
        <CardHeader>
          <SignupStepper />
        </CardHeader>
        <CardBody w={"85%"} margin={"0 auto"}>
          <FormLabel htmlFor="email" fontSize={"2xl"}>
            이메일 (ID)
          </FormLabel>
          <InputGroup size={"md"}>
            <Input id="email" />
            <InputRightElement w={"5rem"}>
              <Button onClick={() => verifyEmailHandler()} h="2rem">
                인증하기
              </Button>
            </InputRightElement>
          </InputGroup>
          <VerifyEmailCautionCard />
        </CardBody>
        <CardFooter justifyContent={"center"}>
          <ButtonGroup w={"80%"}>
            <GoHomeBtn />
            {/* <Button
              w={"50%"}
              h={"50px"}
              isDisabled={true}
              onClick={() => router.push("/signup/user")}
            >
              다음단계
            </Button> */}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default VerifyEmail;

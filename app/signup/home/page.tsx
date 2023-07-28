"use client";
import { verifyEmail } from "@/utils/API/CSRSetting";
import { stepData } from "@/utils/data/ClientData";
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
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpHome = () => {
  const router = useRouter();

  const { activeStep } = useSteps({
    index: 1,
    count: stepData.length,
  });

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
          <Stepper
            size={["sm", "md", "lg"]}
            index={activeStep}
            maxW={"500px"}
            margin={"20px auto"}
          >
            {stepData.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  {/* <StepTitle>{step.title}</StepTitle> */}
                  <StepDescription>{step.title}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
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
          <Card as="article" marginTop={"20px"}>
            <CardHeader>
              <Text as={"h1"} fontSize={"xl"} color={"red"}>
                주의 사항
              </Text>
            </CardHeader>
            <CardBody>
              <VStack spacing={2} alignItems={"flex-start"}>
                <Text>👉 인증된 이메일은 아이디로 사용됩니다.</Text>
                <Text>
                  👉 이미 존재하는 이메일의 경우 회원가입이 불가능합니다.
                </Text>
                <Text>
                  👉 인증 완료 후 회원가입 진행을 하지않은 경우 별도의 <br />
                  &nbsp;&nbsp;&nbsp; 인증 없이 회원가입 페이지로 넘어갑니다.
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </CardBody>
        <CardFooter justifyContent={"center"}>
          <ButtonGroup>
            <Button>홈으로</Button>
            <Button
              isDisabled={true}
              onClick={() => router.push("/signup/user")}
            >
              다음단계
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SignUpHome;

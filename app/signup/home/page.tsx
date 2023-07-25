"use client";
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
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpHome = () => {
  const router = useRouter();

  const { activeStep } = useSteps({
    index: 1,
    count: stepData.length,
  });

  return (
    <Box paddingTop={"8rem"} h={"100vh"} as="main">
      <Card h={"70vh"} as={"section"} w={"50%"} margin={"0 auto"}>
        <CardHeader>
          <Stepper index={activeStep} w={"60%"} margin={"20px auto"}>
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
                  <StepTitle>{step.title}</StepTitle>
                  {/* <StepDescription>{step.description}</StepDescription> */}
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </CardHeader>

        <CardBody w={"70%"} margin={"0 auto"}>
          <FormLabel>이메일</FormLabel>
          <InputGroup>
            <Input />
            <InputRightElement w={"4.5em"}>
              <Button>인증하기</Button>
            </InputRightElement>
          </InputGroup>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button>홈으로</Button>
            <Button disabled={true} onClick={() => router.push("/signup/user")}>
              다음단계
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SignUpHome;

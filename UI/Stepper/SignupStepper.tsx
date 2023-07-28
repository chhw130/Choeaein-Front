import { stepData } from "@/utils/data/ClientData";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import React from "react";

const SignupStepper = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: stepData.length,
  });

  return (
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
          <Box>
            <StepDescription>{step.title}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default SignupStepper;

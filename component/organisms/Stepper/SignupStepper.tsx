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
      size={["xs", "md", "lg"]}
      index={activeStep}
      w={"90%"}
      maxW={"600px"}
      margin={"auto auto"}
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
          <Box fontSize={["10px", "15px", "20px"]}>
            <StepDescription>{step.title}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default SignupStepper;

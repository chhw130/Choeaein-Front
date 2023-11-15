"use client";
import { Flex, VStack } from "@chakra-ui/react";
import React from "react";
import SignupStepper from "../organisms/Stepper/SignupStepper";
import VerifyEmailCard from "../organisms/Card/VerifyEmailCard";

const VerifyEmailTemplate = () => {
  return (
    <VStack paddingTop={"2em"} as="main"  >
      <SignupStepper />
      <VerifyEmailCard />
    </VStack>
  );
};

export default VerifyEmailTemplate;

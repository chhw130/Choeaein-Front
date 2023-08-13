"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import SignupStepper from "../organisms/Stepper/SignupStepper";
import VerifyEmailCard from "../organisms/Card/VerifyEmailCard";

const VerifyEmailTemplate = () => {
  return (
    <Flex paddingTop={"4rem"} as="main" h={"100vh"} flexDir={"column"}>
      <SignupStepper />
      <VerifyEmailCard />
    </Flex>
  );
};

export default VerifyEmailTemplate;

import { Box } from "@chakra-ui/react";
import React from "react";
import SignUp from "../singupPage/SignUp";

const SignUpTemplate = () => {
  return (
    <Box as="main" paddingTop={"4rem"}>
      <SignUp />
    </Box>
  );
};

export default SignUpTemplate;

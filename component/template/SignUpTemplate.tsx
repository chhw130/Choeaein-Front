import { Box } from "@chakra-ui/react";
import React from "react";
import SignUpFormSection from "../organisms/Section/SignUpFormSection";

const SignUpTemplate = () => {
  return (
    <Box as="main" paddingTop={"3rem"}>
      <SignUpFormSection />
    </Box>
  );
};

export default SignUpTemplate;

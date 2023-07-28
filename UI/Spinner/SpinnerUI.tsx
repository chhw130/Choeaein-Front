import React from "react";
import { Spinner } from "@chakra-ui/react";

const SpinnerUI = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#f89598"
      size="xl"
    />
  );
};

export default SpinnerUI;

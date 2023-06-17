import { Button } from "@chakra-ui/react";
import React from "react";

const FindButton = () => {
  return (
    <Button
      type="submit"
      w={"100%"}
      h={"50px"}
      bg="#f89598"
      color="white"
      _hover={{ bg: "#e0797b" }}
    >
      아이디 찾기
    </Button>
  );
};

export default FindButton;

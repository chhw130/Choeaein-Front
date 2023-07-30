import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const GoHomeBtn = () => {
  const router = useRouter();

  return (
    <Button
      w="50%"
      h="50px"
      margin={"0 auto"}
      onClick={() => {
        router.push("/");
      }}
      type="button"
    >
      홈으로
    </Button>
  );
};

export default GoHomeBtn;

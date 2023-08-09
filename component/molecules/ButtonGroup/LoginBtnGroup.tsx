import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import { ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginBtnGroupProps {
  loginLoading: boolean;
}

const LoginBtnGroup = ({ loginLoading }: LoginBtnGroupProps) => {
  const router = useRouter();
  return (
    <ButtonGroup marginTop="10px" justifyContent="center" w="100%">
      <ButtonAtom
        w="50%"
        h="50px"
        margin={"0 auto"}
        onClick={() => {
          router.push("/");
        }}
        type="button"
      >
        홈으로
      </ButtonAtom>

      <ButtonAtom
        w="50%"
        h="50px"
        type="submit"
        color="white"
        bg="#f89598"
        isLoading={loginLoading}
        _hover={{ bg: "#e0797b" }}
      >
        로그인
      </ButtonAtom>
    </ButtonGroup>
  );
};

export default LoginBtnGroup;

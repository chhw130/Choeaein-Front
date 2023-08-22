import React from "react";
import { SignUpData } from "../interface/interface";
import { postSignUp } from "../API/CSRSetting";
import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { useColorMode } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { TokenType } from "@/component/organisms/Section/SignUpFormSection";

interface UseSignUpType {
  signUpHandler: UseMutateAsyncFunction<any, unknown, SignUpData, unknown>;
  isLoading: boolean;
}

const useSignUp = (token: TokenType): UseSignUpType => {
  const { colorMode } = useColorMode();

  const { mutateAsync: signUpHandler, isLoading } = useMutation(
    (signUpInform: SignUpData) => postSignUp(signUpInform, token),
    {
      onSuccess: () => {
        return toast("회원가입에 성공했습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: "signUp",
        });
      },
      onError: () => {
        return toast("회원가입에 실패했습니다.", {
          type: "error",
          theme: colorMode,
          autoClose: 2000,
          toastId: "signUp",
        });
      },
    }
  );

  return { signUpHandler, isLoading };
};

export default useSignUp;

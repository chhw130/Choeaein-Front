import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { postVerifyEmail } from "../API/CSRSetting";
import { toast } from "react-toastify";
import { useColorMode } from "@chakra-ui/react";

interface UseVerifyEmailType {
  verifyEmailHandler: UseMutateAsyncFunction<any, unknown, object, unknown>;
  isLoading: boolean;
}

const useVerifyEmail = (): UseVerifyEmailType => {
  const { colorMode } = useColorMode();

  const { mutateAsync: verifyEmailHandler, isLoading } = useMutation(
    (email: object) => postVerifyEmail(email),
    {
      onSuccess: () => {
        toast("이메일 전송이 완료되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: "verifyEmail",
        });
      },
      onError: () => {
        toast("이메일 전송에 실패했습니다.", {
          type: "error",
          theme: colorMode,
          autoClose: 2000,
          toastId: "verfiyEmailErr",
        });
      },
    }
  );
  return { verifyEmailHandler, isLoading };
};

export default useVerifyEmail;

import { LoginData } from "../interface/interface";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { postLogin } from "../API/CSRSetting";
import { toast } from "react-toastify";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const queryClient: QueryClient = useQueryClient();

  const { mutateAsync: loginHandler, isLoading: loginLoading } = useMutation(
    (loginData: LoginData) => postLogin(loginData),
    {
      onError: () => {
        toast("ID또는 Password가 틀렸습니다.", {
          type: "error",
          theme: colorMode,
          toastId: "login",
          autoClose: 1500,
        });
      },
      onSuccess: () => {
        router.push("/");
        queryClient.invalidateQueries(["me"]);
        toast("로그인 성공!!", {
          type: "info",
          theme: colorMode,
          toastId: "login",
          autoClose: 2000,
        });
      },
    }
  );

  return { loginHandler, loginLoading };
};

export default useLogin;

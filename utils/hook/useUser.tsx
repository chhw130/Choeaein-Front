import { useQuery } from "@tanstack/react-query";
import { getUserInform } from "../axios/AxiosSetting";
import { useRouter } from "next/navigation";

interface UseUserType {
  userData: any;
  isLogin: boolean;
  isLoading: boolean;
}

const useUser = (): UseUserType => {
  const {
    data: userData,
    isError,
    isLoading,
  } = useQuery(["me"], () => getUserInform(), {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { userData, isLogin: !isError, isLoading };
};

export default useUser;

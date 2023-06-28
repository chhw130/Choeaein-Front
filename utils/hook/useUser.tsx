import { useQuery } from "@tanstack/react-query";
import { getUserInform } from "../API/CSRSetting";
import { useRouter } from "next/navigation";
import { UserData } from "../interface/interface";

interface UseUserType {
  userData: UserData;
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
    onError: () => {
      null;
    },
  });

  return { userData, isLogin: !isError, isLoading };
};

export default useUser;

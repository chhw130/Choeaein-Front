import { useQuery } from "@tanstack/react-query";
import { getUserInform } from "../API/CSRSetting";
import { UserData } from "../interface/interface";
import { queryKey } from "../queryKey/QueryKey";

interface UseUserType {
  userData: UserData;
  isLogin: boolean;
  isLoading: boolean;
}

const useUser = (): UseUserType => {
  const {
    data: userData = {},
    isError,
    isLoading,
  } = useQuery([queryKey.userKey], () => getUserInform(), {
    retry: false,
    refetchOnWindowFocus: false,
    onError: () => {
      null;
    },
  });

  return { userData, isLogin: !isError, isLoading };
};

export default useUser;

import { useQuery } from "@tanstack/react-query";
import { getSearchData } from "../API/CSRSetting";
import { MemberType } from "../interface/interface";

export interface UseSearchDataType {
  searchData: MemberType[];
  isLoading: boolean;
}

const useSearchData = (
  keyword: string | null | undefined
): UseSearchDataType => {
  const { data: searchData, isLoading } = useQuery(
    ["searchData", keyword],
    () => getSearchData(keyword),
    {
      onError: () => {
        return;
      },
      retry: false,
    }
  );

  return { searchData, isLoading };
};

export default useSearchData;

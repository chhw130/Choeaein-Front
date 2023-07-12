import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getSearchData } from "../API/CSRSetting";
import { MemberType } from "../interface/interface";

interface UseSearchDataType {
  searchData: MemberType;
  isLoading: boolean;
}

const useSearchData = (
  keyword: string | null | undefined
): UseSearchDataType => {
  const { data: searchData, isLoading } = useQuery(
    ["searchData", keyword],
    () => getSearchData(keyword)
  );

  return { searchData, isLoading };
};

export default useSearchData;

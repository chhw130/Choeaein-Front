"use client";
import { useQuery } from "@tanstack/react-query";
import { getIdolList } from "../axios/AxiosSetting";

interface IdolHook {
  idolData: any;
  isLoading: boolean;
}

const useIdol = () => {
  const { data: idolData = [], isLoading } = useQuery(
    ["idolData"],
    () => getIdolList(),
    {}
  );

  return { idolData, isLoading };
};

export default useIdol;

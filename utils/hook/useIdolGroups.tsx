"use client";
import { useQuery } from "@tanstack/react-query";
import { getIdolGroups } from "../API/SSGSetting";

interface getIdolGroup {
  idolGroupData: any;
  error: unknown;
}

const useIdolGroups = (): getIdolGroup => {
  const { data: idolGroupData = [], error } = useQuery(["idolGroup"], () =>
    getIdolGroups()
  );

  return { idolGroupData, error };
};

export default useIdolGroups;

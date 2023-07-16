import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getIdolSchedule } from "../API/CSRSetting";
import { useRecoilState } from "recoil";
import { categoryState } from "../RecoilStore/CategoryState";

interface useIdolDateSchedulesType {
  idolDateSchedules: any;
  isLoading: boolean;
}

const useIdolDateSchedules = (postData: any, idolName: string) => {
  console.log(postData, idolName);
  const {
    data: idolDateSchedules,
    isLoading,
    mutateAsync: getIdolDayScheduleHandler,
  } = useMutation(() => getIdolSchedule(postData, idolName));

  console.log(isLoading, idolDateSchedules);

  return { idolDateSchedules, isLoading, getIdolDayScheduleHandler };
};

export default useIdolDateSchedules;

import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getIdolSchedule } from "../API/CSRSetting";
import { useRecoilState } from "recoil";
import { categoryState } from "../RecoilStore/CategoryState";
import { IdolDateScheduleType } from "../interface/interface";

interface UseIdolDateSchedulesType {
  idolDateSchedules: IdolDateScheduleType[];
  isLoading: boolean;
  getIdolDayScheduleHandler: UseMutateAsyncFunction<
    any,
    unknown,
    void,
    unknown
  >;
}

const useIdolDateSchedules = (
  postData: any,
  idolName: string
): UseIdolDateSchedulesType => {
  const {
    data: idolDateSchedules = [],
    isLoading,
    mutateAsync: getIdolDayScheduleHandler,
  } = useMutation(() => getIdolSchedule(postData, idolName));

  return { idolDateSchedules, isLoading, getIdolDayScheduleHandler };
};

export default useIdolDateSchedules;

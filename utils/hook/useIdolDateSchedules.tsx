import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { getIdolSchedule } from "../API/CSRSetting";
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

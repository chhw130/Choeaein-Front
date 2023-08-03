import { getUpcomingSchedule } from "../API/CSRSetting";
import { useQuery } from "@tanstack/react-query";
import { IdolDateScheduleType } from "../interface/interface";
import { queryKey } from "../queryKey/QueryKey";

interface useUpcomingSchedules {
  data: IdolDateScheduleType[];
  isLoading: boolean;
}

const useUpcomingSchedules = (idol: string) => {
  const { data = [], isLoading } = useQuery(
    [queryKey.upComingScheduleKey, idol],
    () => getUpcomingSchedule(idol)
  );

  return { data, isLoading };
};

export default useUpcomingSchedules;

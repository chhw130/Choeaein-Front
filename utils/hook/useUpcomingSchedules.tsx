import { getUpcomingSchedule } from "../API/CSRSetting";
import { useQuery } from "@tanstack/react-query";
import { IdolDateScheduleType } from "../interface/interface";

interface useUpcomingSchedules {
  data: IdolDateScheduleType[];
  isLoading: boolean;
}

const useUpcomingSchedules = (idol: string) => {
  const { data = [], isLoading } = useQuery(["upComingSchedule", idol], () =>
    getUpcomingSchedule(idol)
  );

  return { data, isLoading };
};

export default useUpcomingSchedules;

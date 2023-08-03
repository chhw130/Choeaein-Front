import { getUserReportDetail } from "../API/CSRSetting";
import { useQuery } from "@tanstack/react-query";
import { MypageReportSchedule } from "../interface/interface";
import { queryKey } from "../queryKey/QueryKey";

interface useUserReportDetailType {
  userReportDetail: MypageReportSchedule;
  isLoading: boolean;
}

const useUserReportDetail = (schedulePk: number): useUserReportDetailType => {
  const { data: userReportDetail = [], isLoading } = useQuery(
    [queryKey.userReportKey, schedulePk],
    () => getUserReportDetail(schedulePk)
  );
  return { userReportDetail, isLoading };
};

export default useUserReportDetail;

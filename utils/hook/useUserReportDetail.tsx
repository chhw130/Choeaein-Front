import React from "react";
import { getUserReportDetail } from "../API/CSRSetting";
import { useQuery } from "@tanstack/react-query";
// import MypageReportSchedule from "../interface/interface.ts";
import { MypageReportSchedule } from "../interface/interface";

interface useUserReportDetailType {
  userReportDetail: MypageReportSchedule;
  isLoading: boolean;
}

const useUserReportDetail = (schedulePk: number): useUserReportDetailType => {
  const { data: userReportDetail = [], isLoading } = useQuery(
    ["userReport", schedulePk],
    () => getUserReportDetail(schedulePk)
  );
  return { userReportDetail, isLoading };
};

export default useUserReportDetail;

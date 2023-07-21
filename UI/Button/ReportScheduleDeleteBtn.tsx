import { deleteUserReportSchedule } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { Button } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FiTrash } from "react-icons/fi";

const ReportScheduleDeleteBtn = ({
  reportData,
}: {
  reportData: MypageReportSchedule;
}) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteUserScheduleHandler, isLoading } = useMutation(
    (schedulePk: number) => deleteUserReportSchedule(schedulePk),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userReportSchedule"]);
      },
    }
  );

  return (
    <Button isLoading={isLoading}>
      <FiTrash onClick={() => deleteUserScheduleHandler(reportData?.pk)} />
    </Button>
  );
};

export default ReportScheduleDeleteBtn;

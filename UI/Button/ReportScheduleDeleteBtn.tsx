import { deleteUserReportSchedule } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import { Button, useColorMode } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { toast, useToast } from "react-toastify";

const ReportScheduleDeleteBtn = ({
  reportData,
}: {
  reportData: MypageReportSchedule;
}) => {
  const queryClient = useQueryClient();
  const { colorMode } = useColorMode();

  const { mutateAsync: deleteUserScheduleHandler, isLoading } = useMutation(
    (schedulePk: number) => deleteUserReportSchedule(schedulePk),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userReportSchedule"]);
        return toast("스케줄이 삭제되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: 1,
        });
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

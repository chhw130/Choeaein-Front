import { PostDataType } from "@/UI/Modal/ReportModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useColorMode } from "@chakra-ui/react";
import { putUserReportDetail } from "../API/CSRSetting";

const useReviseReportSchedule = (onClose: () => void, reportPk: number) => {
  const queryClient = useQueryClient();
  const { colorMode } = useColorMode();

  const { mutateAsync: putUserReportDetailHandler, isLoading } = useMutation(
    (formData: PostDataType) => putUserReportDetail(formData, reportPk),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userReportSchedule"]);
        queryClient.invalidateQueries(["myReport"]);
        onClose();
        return toast("스케줄이 수정되었습니다.", {
          type: "success",
          theme: colorMode,
          autoClose: 2000,
          toastId: 1,
        });
      },
    }
  );
  return { putUserReportDetailHandler, isLoading };
};

export default useReviseReportSchedule;

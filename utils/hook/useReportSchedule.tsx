import { PostDataType } from "@/UI/Modal/ReportModal";
import { UseMutateAsyncFunction, useMutation } from "@tanstack/react-query";
import { postUserReportSchedule } from "../API/CSRSetting";
import { toast } from "react-toastify";
import { useColorMode } from "@chakra-ui/react";

interface UseReportScheduleType {
  reportScheduleHandler: UseMutateAsyncFunction<
    any,
    unknown,
    PostDataType,
    unknown
  >;
  isLoading: boolean;
}

const useReportSchedule = (onClose: () => void): UseReportScheduleType => {
  const { colorMode } = useColorMode();

  const { mutateAsync: reportScheduleHandler, isLoading } = useMutation(
    (data: PostDataType) => postUserReportSchedule(data),
    {
      onSuccess: () => {
        onClose();
        return toast("일정이 제보되었습니다.", {
          type: "success",
          theme: colorMode,
          toastId: "report",
        });
      },
      onError: () => {
        return toast("잠시후 다시 시도해주세요.", {
          type: "error",
          theme: colorMode,
          toastId: "report",
        });
      },
    }
  );

  return { reportScheduleHandler, isLoading };
};

export default useReportSchedule;

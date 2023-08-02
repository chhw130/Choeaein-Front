import {
  Button,
  ButtonGroup,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MypageReportSchedule } from "@/utils/interface/interface";
import ButtonAtom from "../../atoms/Button/ButtonAtom";
import { FiEdit, FiTrash, FiUserCheck } from "react-icons/fi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserReportSchedule } from "@/utils/API/CSRSetting";
import { toast } from "react-toastify";
import ReportEditModal from "../../../UI/Modal/ReportEditModal";
import ReportRegisterModal from "../../../UI/Modal/ReportRegisterModal";

const ReportScheduleBtn = ({ row }: any) => {
  const reportData: MypageReportSchedule = row?.original;

  const {
    isOpen: isReportEditModalOpen,
    onOpen: onReportEditModalOpen,
    onClose: onReportEditModalClose,
  } = useDisclosure();

  const {
    isOpen: isReportRegisterModalOpen,
    onOpen: onReportRegisterModalOpen,
    onClose: onReportRegisterModalClose,
  } = useDisclosure();

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
    <>
      <ReportEditModal
        isOpen={isReportEditModalOpen}
        onClose={onReportEditModalClose}
        reportData={reportData}
      />
      <ReportRegisterModal
        isOpen={isReportRegisterModalOpen}
        onClose={onReportRegisterModalClose}
        reportData={reportData}
      />
      <ButtonGroup>
        <ButtonAtom onClick={() => onReportRegisterModalOpen()}>
          <FiUserCheck />
        </ButtonAtom>
        <ButtonAtom onClick={() => onReportEditModalOpen()}>
          <FiEdit />
        </ButtonAtom>
        <ButtonAtom onClick={() => deleteUserScheduleHandler(reportData?.pk)}>
          <FiTrash />
        </ButtonAtom>
      </ButtonGroup>
    </>
  );
};

export default ReportScheduleBtn;

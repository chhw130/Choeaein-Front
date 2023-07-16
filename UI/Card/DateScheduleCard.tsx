import { IdolDateScheduleType } from "@/utils/interface/interface";
import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";

interface DateScheduleCardProps {
  idolDateSchedule: IdolDateScheduleType;
}

const DateScheduleCard = ({ idolDateSchedule }: DateScheduleCardProps) => {
  const {
    isOpen: isOpenScheduleDetail,
    onClose: onCloseScheduleDetail,
    onOpen: onOpenScheduleDetail,
  } = useDisclosure();

  return (
    <>
      <ScheduleDetailModal
        isOpen={isOpenScheduleDetail}
        onClose={onCloseScheduleDetail}
        idolDateSchedule={idolDateSchedule}
      />
      <Box
        key={idolDateSchedule.pk}
        bg={"white"}
        color={"black"}
        w={"300px"}
        h={"60px"}
        borderRadius={"10px"}
        cursor={"pointer"}
        onClick={() => onOpenScheduleDetail()}
      >
        {idolDateSchedule.ScheduleTitle}
      </Box>
    </>
  );
};

export default DateScheduleCard;

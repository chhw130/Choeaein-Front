import { IdolDateScheduleType } from "@/utils/interface/interface";
import { Card, CardBody, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@/utils/data/ClientData";

interface DateScheduleCardProps {
  idolDateSchedule: IdolDateScheduleType;
}

const DateScheduleCard = ({ idolDateSchedule }: DateScheduleCardProps) => {
  const {
    isOpen: isOpenScheduleDetail,
    onClose: onCloseScheduleDetail,
    onOpen: onOpenScheduleDetail,
  } = useDisclosure();

  const category = idolDateSchedule?.ScheduleType?.type;

  return (
    <>
      <ScheduleDetailModal
        isOpen={isOpenScheduleDetail}
        onClose={onCloseScheduleDetail}
        idolDateSchedule={idolDateSchedule}
      />
      <Card
        key={idolDateSchedule.pk}
        w={["100%", "100%", "80%"]}
        borderRadius={"10px"}
        cursor={"pointer"}
        onClick={() => onOpenScheduleDetail()}
      >
        <CardBody>
          <FontAwesomeIcon
            icon={icon[category as keyof typeof icon].icon}
            color={icon[category as keyof typeof icon].bg}
          />
          <Text>{idolDateSchedule.ScheduleTitle}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default DateScheduleCard;

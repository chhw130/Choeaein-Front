import { IdolDateScheduleType } from "@/utils/interface/interface";
import { Box, Card, CardBody, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";
import {
  IconDefinition,
  faBroadcastTower,
  faCalendarCheck,
  faCompactDisc,
  faGift,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DateScheduleCardProps {
  idolDateSchedule: IdolDateScheduleType;
}

interface CategoryType {
  icon: IconDefinition;
  bg: string;
}

interface IconType {
  broadcast: CategoryType;
  event: CategoryType;
  release: CategoryType;
  congrats: CategoryType;
  buy: CategoryType;
}

const DateScheduleCard = ({ idolDateSchedule }: DateScheduleCardProps) => {
  const {
    isOpen: isOpenScheduleDetail,
    onClose: onCloseScheduleDetail,
    onOpen: onOpenScheduleDetail,
  } = useDisclosure();

  const category = idolDateSchedule?.ScheduleType?.type;

  const icon: IconType = {
    broadcast: {
      icon: faBroadcastTower,
      bg: "#443c68",
    },
    event: { icon: faCalendarCheck, bg: "#537fe7" },
    release: {
      icon: faCompactDisc,
      bg: "#f16767",
    },
    congrats: { icon: faGift, bg: "#e7b10a" },
    buy: { icon: faStore, bg: "#609966" },
  };

  return (
    <>
      <ScheduleDetailModal
        isOpen={isOpenScheduleDetail}
        onClose={onCloseScheduleDetail}
        idolDateSchedule={idolDateSchedule}
      />
      <Card
        key={idolDateSchedule.pk}
        bg={"white"}
        color={"black"}
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

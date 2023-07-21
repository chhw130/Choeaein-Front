import { getMyReportSchedules } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import UserScheduleStatusModal from "../Modal/UserScheduleStatusModal";
import { icon } from "@/utils/data/ClientData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ScheduleCardProps {
  userReport: MypageReportSchedule;
}

const UserScheduleCard = ({ userReport }: ScheduleCardProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const category = userReport?.ScheduleType?.type;

  return (
    <>
      <UserScheduleStatusModal
        isOpen={isOpen}
        onClose={onClose}
        userReport={userReport}
      />
      <Card
        cursor={"pointer"}
        w={["100%", "80%", "80%"]}
        margin={"10px auto"}
        onClick={() => onOpen()}
      >
        <CardBody>
          <Text>
            <FontAwesomeIcon
              icon={icon[category as keyof typeof icon].icon}
              color={icon[category as keyof typeof icon].bg}
            />
            &nbsp;{userReport.ScheduleTitle}
            &nbsp;{userReport?.is_enroll ? "(승인)" : "(미승인)"}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default UserScheduleCard;

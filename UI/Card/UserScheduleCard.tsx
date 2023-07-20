import { getMyReportSchedules } from "@/utils/API/CSRSetting";
import { MypageReportSchedule } from "@/utils/interface/interface";
import {
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

interface ScheduleCardProps {
  userReport: MypageReportSchedule;
}

const UserScheduleCard = ({ userReport }: ScheduleCardProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <UserScheduleStatusModal
        isOpen={isOpen}
        onClose={onClose}
        userReport={userReport}
      />
      <Card cursor={"pointer"} margin={1} onClick={() => onOpen()}>
        <CardBody>
          <Text>{userReport.ScheduleTitle}</Text>
        </CardBody>
      </Card>
    </>
  );
};

export default UserScheduleCard;

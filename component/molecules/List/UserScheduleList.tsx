import { MypageReportSchedule } from "@/utils/interface/interface";
import {
  Box,
  Card,
  CardBody,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import UserScheduleStatusModal from "../../../UI/Modal/UserScheduleStatusModal";
import { icon } from "@/utils/data/ClientData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextAtom from "@/component/atoms/Text/TextAtom";

interface ScheduleCardProps {
  userReport: MypageReportSchedule;
}

const UserScheduleList = ({ userReport }: ScheduleCardProps) => {
  const { onClose, onOpen, isOpen } = useDisclosure();

  const category = userReport?.ScheduleType?.type;

  const { colorMode } = useColorMode();

  return (
    <>
      <UserScheduleStatusModal
        isOpen={isOpen}
        onClose={onClose}
        userReport={userReport}
      />
      <Box
        cursor={"pointer"}
        as="li"
        w={["100%", "80%", "80%"]}
        padding={"20px"}
        margin={"0 auto"}
        onClick={() => onOpen()}
        boxShadow={"lg"}
        bg={colorMode !== "dark" ? "white" : "blackAlpha.900"}
        borderRadius={"10px"}
      >
        <TextAtom>
          <FontAwesomeIcon
            icon={icon[category as keyof typeof icon]?.icon}
            color={icon[category as keyof typeof icon]?.bg}
          />
          &nbsp;{userReport.ScheduleTitle}
          &nbsp;{userReport?.is_enroll ? "(승인)" : "(미승인)"}
        </TextAtom>
      </Box>
    </>
  );
};

export default UserScheduleList;

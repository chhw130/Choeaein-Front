import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import { ButtonGroup, Text } from "@chakra-ui/react";
import {
  faChevronLeft,
  faChevronRight,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { Dispatch, SetStateAction } from "react";

interface CalendarBtnGroupProps {
  setMoment: Dispatch<SetStateAction<moment.Moment>>;
  getMoment: moment.Moment;
  today: moment.Moment;
  setSelectedDay: Dispatch<SetStateAction<moment.Moment>>;
}

const CalendarBtnGroup = ({
  setMoment,
  getMoment,
  today,
  setSelectedDay,
}: CalendarBtnGroupProps) => {
  return (
    <ButtonGroup fontSize={[15, 18, 26]} margin={"auto 0"} spacing={1}>
      <ButtonAtom
        size={["sm", "sm", "md"]}
        onClick={() => {
          setMoment(getMoment.clone().subtract(1, "month"));
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </ButtonAtom>
      <Text
        margin="auto 0px"
        width={["72px", "130px", "150px"]}
        textAlign={"center"}
      >
        {today.format("YYYY.MM")}
      </Text>
      <ButtonAtom
        size={["sm", "sm", "md"]}
        margin={"auto 0"}
        onClick={() => {
          setMoment(getMoment.clone().add(1, "month"));
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </ButtonAtom>
      <ButtonAtom
        size={["sm", "sm", "md"]}
        onClick={() => {
          setMoment(moment());
          setSelectedDay(moment());
        }}
      >
        <FontAwesomeIcon icon={faRotateRight} />
      </ButtonAtom>
    </ButtonGroup>
  );
};

export default CalendarBtnGroup;

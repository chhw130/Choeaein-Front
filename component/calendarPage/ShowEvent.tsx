import { Flex } from "@chakra-ui/react";
import styles from "./Calendar.module.scss";
import moment, { Moment } from "moment";
import "moment/locale/ko";
import { IdolDateScheduleType } from "@/utils/interface/interface";

interface ShowEventProps {
  days: Moment;
  newIdolSchedule: IdolDateScheduleType[];
}

const ShowEvent = ({ days, newIdolSchedule }: ShowEventProps) => {
  const removeDuplicateTypeSchedule = newIdolSchedule.filter(
    (schedule, index, arr) => {
      return (
        arr.findIndex(
          (item) =>
            moment(item.when).format("YYYYMMDD") ===
              moment(schedule.when).format("YYYYMMDD") &&
            item.ScheduleType.type === schedule.ScheduleType.type
        ) === index
      );
    }
  );

  return (
    <>
      <Flex padding={1}>
        {removeDuplicateTypeSchedule?.map((item, i) => {
          if (
            days?.format("YYYYMMDD") == moment(item.when).format("YYYYMMDD")
          ) {
            return (
              <div
                key={i}
                className={`${styles.listItem} ${
                  styles[item.ScheduleType.type]
                }`}
              ></div>
            );
          }
        })}
      </Flex>
    </>
  );
};

export default ShowEvent;

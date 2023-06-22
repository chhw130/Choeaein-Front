import { Flex } from "@chakra-ui/react";
import styles from "./Calendar.module.scss";
import moment from "moment";
import "moment/locale/ko";

export function ShowEvent({ days, newIdolSchedule }: any) {
  return (
    <>
      <Flex padding={1}>
        {newIdolSchedule?.map((item: any, i: number) => {
          if (
            days?.format("YYYYMMDD") == moment(item.when).format("YYYYMMDD")
          ) {
            return (
              <div
                key={i}
                className={`${styles.listItem} ${
                  styles[item.ScheduleType.type]
                }`}
              >
                {item.data}
              </div>
            );
          }
          return true;
        })}
      </Flex>
    </>
  );
}

import { Box, Flex } from "@chakra-ui/react";
import {
  faBroadcastTower,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RandomScheduleSlider = ({ slideBanner }: any) => {
  return (
    <>
      {slideBanner?.map((data: any, i: number) => {
        const dateFormat = `${data.when.slice(5, 7)}월 ${data.when.slice(
          8,
          10
        )}일`;

        const { type: scheduleType } = data.ScheduleType;

        // const scheduleIcon = {
        //   broadcast: faBroadcastTower,
        //   event: faCalendarCheck,
        //   release: faCompactDisc,
        //   congrats: faGift,
        //   buy: faStore,
        // }[scheduleType];

        // const scheduleIconColor = {
        //   broadcast: "#443c68",
        //   event: "#537fe7",
        //   release: "#f16767",
        //   congrats: "#e7b10a",
        //   buy: "#609966",
        // }[scheduleType];

        return (
          <Box
            key={`${data.id}-${i}`}
            margin={"0 10px"}
            transform="transform 0.3s ease"
            boxShadow="5px 5px 1px 1px rgba(243,97,166,0.2)"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Flex
              flexDir="column"
              w={["200px", "200px", "280px"]}
              transition="transform 0.5s"
              cursor="pointer"
              borderRadius="10px"
            >
              <Box padding="20px" fontSize={["10px", "12px", "15px"]}>
                <div>
                  <span>{dateFormat}</span>
                </div>
                <Box h={"57px"} overflow="hidden" textOverflow="ellipsis">
                  <FontAwesomeIcon icon={faBroadcastTower} color="red" />
                  {data.ScheduleTitle}
                </Box>
                <Box position="static" bottom={1} right={10}>
                  <FontAwesomeIcon icon={faMicrophone} />
                  &nbsp;{data.participant[0]?.idol_name_kr}
                </Box>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

export default RandomScheduleSlider;

import { Box, Flex } from "@chakra-ui/react";
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons/faBroadcastTower";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone";
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
            borderRadius={"10px"}
          >
            <Flex
              flexDir="column"
              w={["210px", "230px", "280px"]}
              transition="transform 0.5s"
              cursor="pointer"
              borderRadius="10px"
            >
              <Box
                padding={["13px", "15px", "20px"]}
                fontSize={["11px", "13px", "15px"]}
              >
                <div>
                  <span>{dateFormat}</span>
                </div>
                <Box
                  h={"57px"}
                  overflow="hidden"
                  lineHeight={1.4}
                  textOverflow="ellipsis"
                  // whiteSpace={"nowrap"}
                >
                  <FontAwesomeIcon icon={faBroadcastTower} color="red" />
                  &nbsp;{data.ScheduleTitle}
                </Box>
                <Box position="static" marginTop={[1, 2, 3]} right={10}>
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

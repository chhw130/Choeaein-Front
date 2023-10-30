import { icon } from "@/utils/data/ClientData";
import { RandomIdolSchedule } from "@/utils/interface/interface";
import { Box, Flex } from "@chakra-ui/react";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TextAtom from "../../atoms/Text/TextAtom";

interface RandomSchedulesSilderProps {
  randomSchedules: RandomIdolSchedule[];
}

const RandomScheduleSlider = ({
  randomSchedules,
}: RandomSchedulesSilderProps) => {
  return (
    <>
      {randomSchedules?.map((data, index) => {
        const dateFormat = `${data.when.slice(5, 7)}월 ${data.when.slice(
          8,
          10
        )}일`;
        const category = data.ScheduleType.type;

        return (
          <Box
            as="article"
            key={`${data.pk}-${index}`}
            margin={"0 10px"}
            transform="transform 0.1s ease"
            boxShadow="5px 5px 1px 1px rgba(243,97,166,0.2)"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.4s ease",
            }}
            borderRadius={"10px"}
          >
            <Flex
              padding={"4%"}
              fontSize={["11px", "13px", "1.1em"]}
              w={["180px", "230px", "15vw"]}
              minW={["100%", "100%", "280px"]}
              aspectRatio={"7/3.9"}
              transition="transform 0.8s"
              cursor="pointer"
              pos={"relative"}
              flexDir={"column"}
              justifyContent={"space-around"}
            >
              <TextAtom>{dateFormat}</TextAtom>
              <Box>
                <TextAtom
                  h={"57px"}
                  overflow="hidden"
                  lineHeight={1.4}
                  textOverflow="ellipsis"
                  whiteSpace={"nowrap"}
                >
                  <FontAwesomeIcon
                    icon={icon[category as keyof typeof icon].icon}
                    color={icon[category as keyof typeof icon].bg}
                  />
                  &nbsp;{data.ScheduleTitle}
                </TextAtom>
              </Box>
              <TextAtom w={"100%"} textAlign={"end"}>
                <FontAwesomeIcon icon={faMicrophone} />
                &nbsp;{data.participant.idol}
              </TextAtom>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

export default RandomScheduleSlider;

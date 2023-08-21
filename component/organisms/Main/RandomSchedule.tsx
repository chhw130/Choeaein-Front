"use client";
import {
  Box,
  Container,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import RandomScheduleSlider from "../../molecules/RandomScheduleSlider/RandomScheduleSlider";
import { RandomIdolSchedule } from "@/utils/interface/interface";

const loop = keyframes`
100% {
  transform: translateX(-495%);
}
`;

interface RandomScheduleProps {
  randomSchedules: RandomIdolSchedule[];
}

const RandomSchedule = ({ randomSchedules }: RandomScheduleProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${loop} 28s linear infinite`;

  console.log(randomSchedules);

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      display="flex"
      h={["150px", "180px", "200px"]}
      w="100%"
    >
      <Container
        display="flex"
        alignItems="center"
        animation={animation}
        margin={0}
        padding={0}
        _hover={{
          animationPlayState: "paused",
        }}
      >
        <RandomScheduleSlider randomSchedules={randomSchedules} />
        <RandomScheduleSlider randomSchedules={randomSchedules} />
      </Container>
    </Box>
  );
};

export default RandomSchedule;

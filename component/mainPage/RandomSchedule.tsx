"use client";
import {
  Box,
  Container,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import RandomScheduleSlider from "./RandomScheduleSlider";
import {
  IdolDateScheduleType,
  RandomIdolSchedule,
} from "@/utils/interface/interface";

const loop = keyframes`
100% {
  transform: translateX(-495%);
}
`;

interface RandomScheduleProps {
  randomSchedules: RandomIdolSchedule[];
}

const RandomSchedule = ({ randomSchedules }: RandomScheduleProps) => {
  console.log(randomSchedules);

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${loop} 34s linear infinite`;

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      display="flex"
      h="200px"
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

"use client";
import {
  Box,
  Container,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import RandomScheduleSlider from "./RandomScheduleSlider";
import { RandomIdolSchedule } from "@/utils/interface/interface";

const loop = keyframes`
100% {
  transform: translateX(-495%);
}
`;

interface RandomScheduleProps {
  schedulesData: RandomIdolSchedule[];
}

const RandomSchedule = ({ schedulesData }: RandomScheduleProps) => {
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
        <RandomScheduleSlider schedulesData={schedulesData} />
        <RandomScheduleSlider schedulesData={schedulesData} />
      </Container>
    </Box>
  );
};

export default RandomSchedule;

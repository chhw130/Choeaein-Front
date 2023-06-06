"use client";

import {
  Box,
  Container,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import RandomScheduleSlider from "./UI/RandomScheduleSlider";

const loop = keyframes`
100% {
  transform: translateX(-495%);
}
`;

const RandomSchedule = ({ schedulesData }: any) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${loop} 14s linear infinite`;
  const slideBanner = schedulesData?.slice(0, 10);

  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      h="200px"
      w="100%"
    >
      <Container
        display="flex"
        // justifyContent="center"
        alignItems="center"
        animation={animation}
        margin={0}
        padding={0}
        _hover={{
          animationPlayState: "paused",
        }}
      >
        <RandomScheduleSlider slideBanner={slideBanner} />
        <RandomScheduleSlider slideBanner={slideBanner} />
      </Container>
    </Box>
  );
};

export default RandomSchedule;

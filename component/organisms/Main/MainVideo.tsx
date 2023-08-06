"use client";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

const MainVideo = () => {
  const { colorMode } = useColorMode();
  return (
    /**video source */
    <Flex
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Box
        w={"100%"}
        paddingBottom={["90%", "50%", "38%"]}
        overflow={"hidden"}
        pos={"relative"}
        justifyContent={"center"}
        display={"flex"}
      >
        <iframe
          src="https://player.vimeo.com/video/740372966?autoplay=true&loop=true&muted=true&controls=false&playsinline=0&quality=1080p&transparent=0"
          allow="autoplay"
          allowFullScreen={true}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "block",

            backgroundColor: "white",
          }}
        />
      </Box>
    </Flex>
  );
};

export default MainVideo;

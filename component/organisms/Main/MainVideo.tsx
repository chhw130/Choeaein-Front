"use client";
import { Box, useColorMode } from "@chakra-ui/react";

const MainVideo = () => {
  const { colorMode } = useColorMode();
  return (
    /**video source */
    <>
      <Box w={"100%"} h={"475px"} pos={"relative"} objectFit={"cover"}>
        <iframe
          src="https://player.vimeo.com/video/740372966?autoplay=true&loop=true&muted=true&controls=false&playsinline=0&quality=1080p"
          allow="autoplay"
          style={{
            width: "100%",
            height: "100%",

            backgroundColor: colorMode === "dark" ? "black" : "white",
          }}
        />
      </Box>
    </>
  );
};

export default MainVideo;

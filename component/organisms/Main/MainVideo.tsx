"use client";
import { AspectRatio, Box } from "@chakra-ui/react";

const MainVideo = () => {
  return (
    /**video source */
    <>
      <Box
        w={"100%"}
        h={"475px"}
        pos={"relative"}
        objectFit={"cover"}
        backgroundColor={"blue"}
      >
        <iframe
          src="https://player.vimeo.com/video/740372966?autoplay=true&loop=true&muted=true&controls=false&playsinline=0&quality=1080p&transparent=0"
          allow="autoplay"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "blue",
          }}
        />
      </Box>
    </>
  );
};

export default MainVideo;

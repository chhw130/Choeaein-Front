"use client";
import { AspectRatio } from "@chakra-ui/react";

const MainVideo = () => {
  return (
    /**video source */
    <AspectRatio
      as="section"
      h={["400px", "500px", "530px"]}
      objectFit={"cover"}
    >
      <video preload="none" autoPlay loop muted>
        <source src="/videos/darkHeart.webm" type="video/webm"></source>
      </video>
    </AspectRatio>
  );
};

export default MainVideo;

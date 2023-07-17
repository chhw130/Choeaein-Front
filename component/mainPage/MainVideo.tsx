"use client";
import { Box } from "@chakra-ui/react";
import styles from "./MainVideo.module.scss";

const MainVideo = () => {
  return (
    /**video source */
    <Box as="section">
      <video preload="none" autoPlay loop muted className={styles.mainVideo}>
        <source src="/videos/darkHeart.mp4" type="video/mp4"></source>
      </video>
    </Box>
  );
};

export default MainVideo;

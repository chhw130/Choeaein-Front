"use client";
import { Box } from "@chakra-ui/react";
import styles from "./MainVideo.module.scss";

const MainVideo = () => {
  return (
    <Box as="section">
      <video autoPlay loop muted className={styles.mainVideo}>
        <source src="/videos/darkHeart.mov" type="video/mp4"></source>
      </video>
    </Box>
  );
};

export default MainVideo;

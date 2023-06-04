import React, { useState } from "react";
import styles from "../../app/page.module.scss";

const MainVideo = () => {
  return (
    <video autoPlay loop muted className={styles.mainVideo}>
      {/* <source src="/videos/heart.mp4" type="video/mp4"></source> */}
      <source src="/videos/darkModeHeart.mov" type="video/mp4"></source>
    </video>
  );
};

export default MainVideo;

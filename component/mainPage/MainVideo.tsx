import styles from "./MainVideo.module.scss";

const MainVideo = () => {
  return (
    <video autoPlay loop muted className={styles.mainVideo}>
      <source src="/videos/darkHeart.mov" type="video/mp4"></source>
    </video>
  );
};

export default MainVideo;

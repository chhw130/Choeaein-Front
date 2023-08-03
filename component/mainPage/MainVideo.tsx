import styles from "./MainVideo.module.scss";

const MainVideo = () => {
  return (
    /**video source */
    <section>
      <video preload="none" autoPlay loop muted className={styles.mainVideo}>
        {/* <source src="/videos/darkHeart.mp4" type="video/mp4"></source> */}
        <source src="/videos/darkHeart.webm" type="video/webm"></source>
      </video>
    </section>
  );
};

export default MainVideo;

import { getIdolSchedules } from "@/utils/axios/AxiosSetting";
import React, { useEffect, useState } from "react";
import styles from "../../app/page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroadcastTower,
  faCompactDisc,
  faStore,
  faGift,
  faCalendarCheck,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const RandomSchedule = ({ schedulesData }: any) => {
  // const { data: schedulesData } = useQuery(["schedules"], getIdolSchedules);

  const slideBanner = schedulesData?.slice(0, 10);

  // 슬라이드의 가로 위치를 결정하며, 변경되면 슬라이드가 움직인다
  const [translateX, setTranslateX] = useState(0);

  //  마우스 오버 상태일 때 슬라이드 애니메이션을 일시 중지
  const [isHovered, setIsHovered] = useState(false);

  // 슬라이드 애니메이션을 구현
  useEffect(() => {
    // 각 슬라이드의 너비
    const slideWidth = 300;

    // 전체 슬라이드 수
    const totalSlides = slideBanner ? slideBanner.length * 2 : 0;

    // 전체 슬라이드 수의 절반을 계산
    const halfSlides = totalSlides / 2;

    // 애니메이션의 길이를 초 단위로 정의 - 값이 적을 수록 빠른 슬라이드
    const animationDuration = 5;

    // 각 프레임에서 이동해야 하는 픽셀 수 - 값이 클수록 빠른 슬라이드
    const step = (slideWidth * halfSlides) / (animationDuration * 1000);

    let interval: any;

    // 일정 시간 간격으로 translateX 값을 업데이트
    if (slideBanner && !isHovered) {
      interval = setInterval(() => {
        setTranslateX((prevTranslateX) => {
          if (prevTranslateX <= -(slideWidth * halfSlides)) {
            return 0;
          }
          return prevTranslateX - step;
        });
      }, 1000 / 100); //  초당 100 프레임(FPS)
    }

    // hover 했을 경우 멈추기
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, slideBanner]);

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.slideBox}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {slideBanner?.map((data: any, i: number) => {
          const dateFormat = `${data.when.slice(5, 7)}월 ${data.when.slice(
            8,
            10
          )}일`;

          const { type: scheduleType } = data.ScheduleType;

          // const scheduleIcon = {
          //   broadcast: faBroadcastTower,
          //   event: faCalendarCheck,
          //   release: faCompactDisc,
          //   congrats: faGift,
          //   buy: faStore,
          // }[scheduleType];

          // const scheduleIconColor = {
          //   broadcast: "#443c68",
          //   event: "#537fe7",
          //   release: "#f16767",
          //   congrats: "#e7b10a",
          //   buy: "#609966",
          // }[scheduleType];

          return (
            <div className={styles.slide} key={`${data.id}-${i}`}>
              <div className={styles.slideInner}>
                <div className={styles.slideContent}>
                  <div className={styles.slideTop}>
                    <span>{dateFormat}</span>
                  </div>
                  <div className={styles.slideMid}>
                    <FontAwesomeIcon
                      icon={faBroadcastTower}
                      // icon={scheduleIcon}
                      // color={scheduleIconColor}
                    />
                    <span className={styles.contentTitle}>
                      {data.ScheduleTitle}
                    </span>
                  </div>
                  <div className={styles.slideBot}>
                    <FontAwesomeIcon icon={faMicrophone} />
                    <span className={styles.nameTitle}>
                      {data.participant[0].idol_name_kr}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {slideBanner?.map((data: any, i: number) => {
          const dateFormat = `${data.when.slice(5, 7)}월 ${data.when.slice(
            8,
            10
          )}일`;

          // data.ScheduleType 객체에서 type 속성을 가져와 scheduleType 변수에 할당
          const { type: scheduleType } = data.ScheduleType;
          // const scheduleIcon = {
          //   broadcast: faBroadcastTower,
          //   event: faCalendarCheck,
          //   release: faCompactDisc,
          //   congrats: faGift,
          //   buy: faStore,
          // }[scheduleType];

          // const scheduleIconColor = {
          //   broadcast: "#443c68",
          //   event: "#537fe7",
          //   release: "#f16767",
          //   congrats: "#e7b10a",
          //   buy: "#609966",
          // }[scheduleType];

          return (
            // 인덱스인 i, 그리고 문자열 -duplicate를 결합하여 중복 슬라이드 요소에 대한 고유한 키를 생성
            <div className={styles.slide} key={`${data.id}-${i}-duplicate`}>
              <div className={styles.slideInner}>
                <div className={styles.slideContent}>
                  <div className={styles.slideTop}>
                    <span>{dateFormat}</span>
                  </div>
                  <div className={styles.slideMid}>
                    <FontAwesomeIcon
                      // icon={scheduleIcon}
                      icon={faCalendarCheck}
                      // color={scheduleIconColor}
                    />
                    <span className={styles.contentTitle}>
                      {data.ScheduleTitle}
                    </span>
                  </div>
                  <div className={styles.slideBot}>
                    <FontAwesomeIcon icon={faMicrophone} />
                    <span className={styles.nameTitle}>
                      {data.participant[0].idol_name_kr}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomSchedule;

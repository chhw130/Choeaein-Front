"use client";
import React, { useEffect, useState } from "react";
import styles from "./RandomSchedule.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroadcastTower,
  faCompactDisc,
  faStore,
  faGift,
  faCalendarCheck,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Flex } from "@chakra-ui/react";

const RandomSchedule = ({ schedulesData }: any) => {
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
    <Flex
      overflow="hidden"
      padding="20px 0px"
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
            <Box key={`${data.id}-${i}`} margin={"0 10px"}>
              <Flex
                flexDir="column"
                h={"140px"}
                w={["200px", "200px", "280px"]}
                transition="transform 0.5s"
                boxShadow="5.1px 6.1px 17px 0 rgba(243,97,166,0.23)"
                cursor="pointer"
                borderRadius="10px"
              >
                <Box padding="20px" fontSize={"0.9rem"}>
                  <div>
                    <span>{dateFormat}</span>
                  </div>
                  <Box h={"80%"}>
                    <FontAwesomeIcon
                      icon={faBroadcastTower}
                      // icon={scheduleIcon}
                      // color={scheduleIconColor}
                      color="red"
                    />
                    {data.ScheduleTitle}
                  </Box>
                  <Box position="absolute" bottom={3}>
                    <FontAwesomeIcon icon={faMicrophone} />
                    &nbsp;{data.participant[0]?.idol_name_kr}
                  </Box>
                </Box>
              </Flex>
            </Box>
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
            <Box key={`${data.id}-${i}`} margin={"0 10px"}>
              <Flex
                flexDir="column"
                h={"140px"}
                w={["200px", "200px", "280px"]}
                transition="transform 0.5s"
                boxShadow="5.1px 6.1px 17px 0 rgba(243,97,166,0.23)"
                cursor="pointer"
                borderRadius="10px"
              >
                <Box padding="20px" fontSize={"0.9rem"}>
                  <div>
                    <span>{dateFormat}</span>
                  </div>
                  <Box h={"80%"}>
                    <FontAwesomeIcon
                      icon={faBroadcastTower}
                      // icon={scheduleIcon}
                      // color={scheduleIconColor}
                      color="red"
                    />
                    {data.ScheduleTitle}
                  </Box>
                  <Box position="absolute" bottom={3}>
                    <FontAwesomeIcon icon={faMicrophone} />
                    &nbsp;{data.participant[0]?.idol_name_kr}
                  </Box>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </div>
    </Flex>
  );
};

export default RandomSchedule;

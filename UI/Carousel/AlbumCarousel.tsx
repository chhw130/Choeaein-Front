import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlbumCarouselBtn from "../Button/AlbumCarouselBtn";
import { IdolAlbumType } from "@/utils/interface/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

interface AlbumCaruoselProps {
  albumData: IdolAlbumType;
}

const AlbumCarousel = ({ albumData }: AlbumCaruoselProps) => {
  const album = albumData?.albums;
  const albumLength = album?.length;

  const slickRef = useRef<any>(false);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <Box marginTop={"10px"} pos={"relative"}>
      <Text fontSize={"2xl"}>
        <FontAwesomeIcon icon={faCompactDisc} />
        &nbsp;Album
      </Text>
      <Slider {...settings} ref={slickRef}>
        {album?.map((data) => {
          return (
            <Box width={"100px"} key={data.pk}>
              <Image
                src={data.album_cover}
                alt="아티스트 이미지"
                width={180}
                height={180}
                priority
              />
            </Box>
          );
        })}
      </Slider>
      {albumLength > 3 && (
        <>
          <AlbumCarouselBtn slickEvent={slickRef} left={"-30px"} />
          <AlbumCarouselBtn slickEvent={slickRef} right={"-30px"} />
        </>
      )}
    </Box>
  );
};

export default AlbumCarousel;

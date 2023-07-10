import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AlbumCaruoselProps {
  albumData: any;
}

const AlbumCarousel = ({ albumData }: AlbumCaruoselProps) => {
  const album = albumData.albums;

  const slickRef = useRef<any>(false);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "100px",
  };
  return (
    <Box marginTop={"10px"}>
      <Slider {...settings} ref={slickRef}>
        {album.map((data: any) => {
          return (
            <Box width={"100px"} key={data.pk}>
              <Image
                src={data.album_cover}
                alt="아티스트 이미지"
                width={180}
                height={180}
              />
            </Box>
          );
        })}
      </Slider>
      <Button onClick={() => slickRef?.current?.slickNext()}>{"<"}</Button>
    </Box>
  );
};

export default AlbumCarousel;

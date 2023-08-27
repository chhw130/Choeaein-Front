"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Tooltip } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { albumType } from "@/utils/interface/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import TextAtom from "@/component/atoms/Text/TextAtom";
import { imgPlaceholder } from "@/utils/data/ClientData";

interface AlbumCaruoselProps {
  albumData: albumType[];
}

const AlbumCarousel = ({ albumData }: AlbumCaruoselProps) => {
  const slickRef = useRef<any>(false);

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
      <TextAtom fontSize={"2xl"}>
        <FontAwesomeIcon icon={faCompactDisc} />
        &nbsp;Album
      </TextAtom>

      <Slider {...settings} ref={slickRef}>
        {albumData?.map((data) => {
          return (
            <Box key={data.pk} cursor="pointer">
              <Tooltip label={data.album_name} placement="bottom">
                <Image
                  src={data.album_cover}
                  alt={data.album_name}
                  width={380}
                  height={380}
                  priority={true}
                  placeholder="blur"
                  blurDataURL={imgPlaceholder}
                />
              </Tooltip>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default AlbumCarousel;

import { Button } from "@chakra-ui/react";
import React from "react";

interface AlbumCarouselType {
  slickEvent: any;
  left?: string;
  right?: string;
}

const AlbumCarouselBtn = ({ slickEvent, ...rest }: AlbumCarouselType) => {
  return (
    <Button
      pos={"absolute"}
      top={"50%"}
      size={"xs"}
      {...rest}
      onClick={() => {
        rest.left
          ? slickEvent?.current?.slickPrev()
          : slickEvent?.current?.slickNext();
      }}
    >
      {rest.left ? "<" : ">"}
    </Button>
  );
};

export default AlbumCarouselBtn;

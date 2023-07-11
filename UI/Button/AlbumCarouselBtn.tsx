import { Button } from "@chakra-ui/react";
import React from "react";

interface AlbumCarouselType {
  slickEvent: any;
  type: string;
}

const AlbumCarouselBtn = ({ slickEvent, ...rest }: any) => {
  console.log(rest);
  return (
    <Button
      pos={"absolute"}
      top={"38%"}
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

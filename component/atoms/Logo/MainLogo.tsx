import { HStack, Text, TypographyProps } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../utils/img/logo_main.png";

interface MainLogoProps {
  width: number;
  height: number;
  fontSize: number[];
}

const MainLogo = ({ width, height, fontSize }: MainLogoProps) => {
  return (
    <Link href={"/"} prefetch={true} scroll={false}>
      <HStack margin={"20px"}>
        <Image
          src={logo}
          alt="최애돌"
          width={width}
          height={height}
          priority={true}
        />
        <Text fontSize={fontSize} fontWeight="bold">
          CHOEAEIN
        </Text>
      </HStack>
    </Link>
  );
};

export default MainLogo;

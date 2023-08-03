import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../utils/img/logo_main.png";

const MainLogo = () => {
  return (
    <Link href={"/"} prefetch={false} scroll={false}>
      <HStack margin={"20px"}>
        <Image src={logo} alt="최애돌" width={40} height={40} priority={true} />
        <Text fontSize={["30px", "40px", "40px"]} fontWeight="bold">
          CHOEAEIN
        </Text>
      </HStack>
    </Link>
  );
};

export default MainLogo;

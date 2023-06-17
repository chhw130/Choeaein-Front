import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/img/logo_main.png";

const MainLogo = () => {
  return (
    <Link href={"/"} prefetch={false} scroll={false}>
      <HStack margin={"30px"}>
        <Image src={logo} alt="최애돌" width={50} height={50} priority={true} />
        <Text fontSize="50px" fontWeight="bold">
          CHOEAEIN
        </Text>
      </HStack>
    </Link>
  );
};

export default MainLogo;

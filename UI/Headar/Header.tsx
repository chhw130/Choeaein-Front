"use client";
import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import HeaderBtn from "@/UI/Headar/HeaderBtn";
import logo from "../../public/img/logo_main.png";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import ThemeBtn from "../theme/ThemeBtn";
import SearchBar from "./SearchBar";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <ToastContainer position="top-center" />
      <Flex
        as="nav"
        position="fixed"
        w="100%"
        justifyContent="space-around"
        display="flex"
        zIndex={20}
        height="4rem"
        bg={colorMode !== "dark" ? "white" : "black"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"100%"}
          padding={"20px"}
        >
          <Link href="/" prefetch={false}>
            <HStack spacing={[1, 1, 2]}>
              <Image src={logo} height={20} width={20} alt="choe" />
              <Box fontSize={[15, 15, 20]} fontWeight={"bold"}>
                CHOEAEIN
              </Box>
            </HStack>
          </Link>
          <HStack
            spacing={[1, 1, 3]}
            width={["70%", "50%", "80%"]}
            maxW={["300px", "400px", "500px"]}
            minW={["100px", "300px", "500px"]}
          >
            <SearchBar />
            <ThemeBtn />
            <div className="navItem">
              <HeaderBtn />
            </div>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;

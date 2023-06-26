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
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import HeaderBtn from "@/UI/Headar/HeaderBtn";
import { SidebarContent } from "@/UI/Headar/Sidebar";
import logo from "../../public/img/logo_main.png";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { ToastContainer } from "react-toastify";
import ThemeBtn from "../theme/ThemeBtn";
import SearchBar from "./SearchBar";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <ToastContainer position="top-center" />
      <Flex
        as="nav"
        position="fixed"
        w="100%"
        justifyContent="center"
        display={["none", "none", "flex"]}
        zIndex={20}
        height="4rem"
        bg={colorMode !== "dark" ? "white" : "black"}
      >
        <Flex w={"96%"} justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/" prefetch={false}>
            <HStack>
              <Image src={logo} height={20} width={20} alt="choe" />
              <Box fontSize={20} fontWeight={"bold"}>
                CHOEAEIN
              </Box>
            </HStack>
          </Link>
          <HStack>
            <SearchBar />
            <ThemeBtn />
            <div className="navItem">
              <HeaderBtn />
            </div>
          </HStack>
        </Flex>
      </Flex>
      <MobileNav onOpen={onOpen} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Header;

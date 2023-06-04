"use client";
import "./Header.scss";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import HeaderBtn from "@/component/header/HeaderBtn";
import { MobileNav, SidebarContent } from "@/component/adminPage/Sidebar";
import logo from "../public/img/logo_main.png";
import Image from "next/image";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        position="fixed"
        w="100%"
        justifyContent="center"
        zIndex={20}
        bg={colorMode === "light" ? "white" : "#171923"}
        height="4rem"
      >
        <Flex w={"96%"} justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/">
            <HStack>
              <Image src={logo} height={20} width={20} alt="choe" />
              <Box fontSize={20} fontWeight={"bold"}>
                CHOEAEIN
              </Box>
            </HStack>
          </Link>

          <HStack>
            <InputGroup marginRight="10px">
              <Input placeholder="아이돌을 검색해보세요." fontSize="0.9rem" />
              <InputRightAddon children={<GoSearch />} padding="0px 8px" />
            </InputGroup>
            <Button
              onClick={toggleColorMode}
              color={colorMode === "light" ? "black" : "white"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
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

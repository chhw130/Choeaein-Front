"use client";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import HeaderBtn from "@/component/header/HeaderBtn";
import { MobileNav, SidebarContent } from "@/component/adminPage/Sidebar";

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
        <div className="headerNav">
          <div className="navItems">
            <div className="navItem">
              <Link href="/">
                <img
                  className="navImg"
                  src="https://velog.velcdn.com/images/view_coding/post/6e4d7220-8bc8-4e88-9d4b-f3dd9e09b523/image.png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <HStack>
            <InputGroup marginRight="10px">
              <Input placeholder="아이돌을 검색해보세요." fontSize="0.9rem" />
              <InputRightAddon children={<GoSearch />} padding="0px 8px" />
            </InputGroup>
            <Button
              onClick={toggleColorMode}
              color={colorMode === "light" ? "black" : "black"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <div className="navItem">
              <HeaderBtn />
            </div>
          </HStack>
        </div>
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

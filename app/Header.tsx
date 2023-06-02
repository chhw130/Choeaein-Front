"use client";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import {
  Box,
  Drawer,
  DrawerContent,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import HeaderBtn from "@/component/header/HeaderBtn";
import { MobileNav, SidebarContent } from "@/component/adminPage/Sidebar";

const Header = () => {
  const [navSize, setnavSize] = useState("6rem");
  const [navColor, setnavColor] = useState("transparent");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("3rem") : setnavSize("5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        className="header"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
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

          <div className="navItems">
            <InputGroup marginRight="10px">
              <Input placeholder="아이돌을 검색해보세요." fontSize="0.9rem" />
              <InputRightAddon children={<GoSearch />} padding="0px 8px" />
            </InputGroup>
            <div className="navItem">
              <HeaderBtn />
            </div>
          </div>
        </div>
      </div>

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

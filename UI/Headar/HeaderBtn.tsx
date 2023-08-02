"use client";
import { Avatar, Menu, MenuButton } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeaderMenuList = dynamic(() => import("../List/HeaderMenuList"));

const HeaderBtn = () => {
  return (
    <Menu>
      <MenuButton>
        <Avatar size={["xs", "xs", "md"]} />
      </MenuButton>
      <HeaderMenuList />
    </Menu>
  );
};

export default HeaderBtn;

"use client";
import AvatarAtoms from "@/component/atoms/Avatar/AvatarAtoms";
import { Menu, MenuButton } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeaderMenuList = dynamic(() => import("../List/HeaderMenuList"));

const HeaderBtn = () => {
  return (
    <Menu>
      <MenuButton>
        <AvatarAtoms size={["xs", "xs", "md"]} />
      </MenuButton>
      <HeaderMenuList />
    </Menu>
  );
};

export default HeaderBtn;

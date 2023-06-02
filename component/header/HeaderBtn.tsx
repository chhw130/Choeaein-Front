"use client";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const loginMenu = [
  {
    title: "로그인",
    link: "/login",
  },
  {
    title: "회원가입",
    link: "/signup",
  },
];

const logoutMenu = [
  {
    title: "로그아웃",
    link: "/",
  },
  {
    title: "마이페이지",
    link: "/mypage",
  },
  {
    title: "스케줄 보기",
    link: "/",
  },
];

const HeaderBtn = () => {
  // let session = useSession();
  // if (session.data?.user) {
  //   console.log(session);
  // }

  const signOutHandler = async () => {
    await signOut();
  };

  return (
    <Menu>
      <MenuButton>
        <Avatar
        // @ts-ignore
        // src={session?.data?.user?.image}
        />
      </MenuButton>
      {
        <MenuList>
          {true
            ? loginMenu.map((menu, index) => (
                <Link href={menu.link} key={index}>
                  <MenuItem>{menu.title}</MenuItem>
                </Link>
              ))
            : logoutMenu.map((menu, index) => {
                if (menu.title === "로그아웃") {
                  return (
                    <MenuItem onClick={() => signOutHandler()} key={index}>
                      {menu.title}
                    </MenuItem>
                  );
                }
                return (
                  <>
                    <Link href={menu.link} key={index}>
                      <MenuItem>{menu.title}</MenuItem>
                    </Link>
                  </>
                );
              })}
        </MenuList>
      }
    </Menu>
  );
};

export default HeaderBtn;

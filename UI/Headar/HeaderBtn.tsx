"use client";
import { postLogout } from "@/utils/axios/AxiosSetting";
import useUser from "@/utils/hook/useUser";
import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useToast } from "../Toast/useToast";

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
  const { isLoading, isLogin, userData } = useUser();

  const queryClient = useQueryClient();
  const { mutateAsync: logoutHandler } = useMutation(() => postLogout(), {
    onSuccess: () => {
      queryClient.removeQueries(["me"]);

      useToast("로그아웃 되었습니다.", "black", "success");
    },
  });

  const signOutHandler = async () => {
    // await signOut();
    await logoutHandler();
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
          {userData?.is_admin && <MenuItem>관리자페이지</MenuItem>}
          {!userData
            ? loginMenu.map((menu, index) => (
                <Link href={menu.link} prefetch={false} key={index}>
                  <MenuItem key={index}>{menu.title}</MenuItem>
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
                  <Link href={menu.link} key={index} prefetch={false}>
                    <MenuItem>{menu.title}</MenuItem>
                  </Link>
                );
              })}
        </MenuList>
      }
    </Menu>
  );
};

export default HeaderBtn;

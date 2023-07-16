"use client";
import { postLogout } from "@/utils/API/CSRSetting";
import useUser from "@/utils/hook/useUser";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
  const { userData } = useUser();
  const { colorMode } = useColorMode();
  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutateAsync: logoutHandler } = useMutation(() => postLogout(), {
    onSuccess: () => {
      queryClient.removeQueries(["me"]);
      toast("로그아웃 되엇습니다.", { theme: colorMode, type: "success" });
      router.push("/");
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
          size={["xs", "xs", "md"]}
        />
      </MenuButton>
      {
        <MenuList>
          {userData?.is_admin && (
            <Link href={"/admin/home"}>
              <MenuItem>관리자페이지</MenuItem>
            </Link>
          )}
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

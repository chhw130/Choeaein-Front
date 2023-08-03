import React from "react";
import { MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import useUser from "@/utils/hook/useUser";
import Link from "next/link";
import { loginMenu, logoutMenu } from "@/utils/data/ClientData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogout } from "@/utils/API/CSRSetting";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { queryKey } from "@/utils/queryKey/QueryKey";

const HeaderMenuList = () => {
  const { userData } = useUser();
  const { colorMode } = useColorMode();
  const router = useRouter();

  const queryClient = useQueryClient();
  const { mutateAsync: logoutHandler } = useMutation(() => postLogout(), {
    onSuccess: () => {
      queryClient.removeQueries([queryKey.userKey]);
      toast("로그아웃 되엇습니다.", { theme: colorMode, type: "success" });
      return router.push("/");
    },
  });

  const signOutHandler = async () => {
    await logoutHandler();
  };

  return (
    <MenuList>
      {userData?.is_admin && (
        <Link href={"/admin/home"} prefetch={true}>
          <MenuItem>관리자페이지</MenuItem>
        </Link>
      )}
      {!userData
        ? loginMenu.map((menu, index) => (
            <Link href={menu.link} prefetch={true} key={index}>
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
              <Link href={menu.link} key={index} prefetch={true}>
                <MenuItem>{menu.title}</MenuItem>
              </Link>
            );
          })}
    </MenuList>
  );
};

export default HeaderMenuList;

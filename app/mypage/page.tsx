"use client";

import useUser from "@/utils/hook/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MyPageTemplate from "@/component/template/MyPageTemplate";

const MyPage = async () => {
  const { isLoading, isLogin, userData } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLogin) router.push("/");
  }, [isLoading, isLogin, userData]);

  return <MyPageTemplate />;
};

export default MyPage;

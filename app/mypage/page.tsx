"use client";

import useUser from "@/utils/hook/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import EditUserContainer from "@/component/myPage/EditUserContainer";

const MyPage = async () => {
  const { isLoading, isLogin, userData } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLogin) router.push("/");
  }, [isLoading, isLogin, userData]);

  return (
    <main>
      <EditUserContainer />
    </main>
  );
};

export default MyPage;

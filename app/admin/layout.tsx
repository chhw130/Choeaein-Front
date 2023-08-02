"use client";
import React, { useEffect } from "react";
import SidebarWithHeader from "@/UI/Headar/Sidebar";
import useUser from "@/utils/hook/useUser";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { userData, isLoading, isLogin } = useUser();
  const router = useRouter();

  /**admin계정만 접근가능 */
  useEffect(() => {
    if (!isLoading && !isLogin) {
      if (!userData?.is_admin) {
        router.push("/");
      }
    }
  }, [userData, isLoading, isLogin]);

  return (
    <>
      <SidebarWithHeader>{children}</SidebarWithHeader>
    </>
  );
};

export default AdminLayout;

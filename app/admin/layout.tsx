import React from "react";
import SidebarWithHeader from "@/UI/Headar/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarWithHeader>{children}</SidebarWithHeader>
    </div>
  );
};

export default AdminLayout;

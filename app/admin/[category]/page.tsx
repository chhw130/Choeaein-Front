import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { getUserInform } from "@/utils/API/CSRSetting";
const IdolList = dynamic(() => import("@/component/adminPage/IdolList"));
const ReportSchedule = dynamic(
  () => import("@/component/adminPage/ReportSchedule")
);

const AdminPage = async (params: any) => {
  const path = params.params.category;

  return (
    <section>
      {path === "idols" ? (
        <IdolList />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </section>
  );
};

export default AdminPage;

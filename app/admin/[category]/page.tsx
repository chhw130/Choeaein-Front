import React from "react";
import dynamic from "next/dynamic";
import { getIdolList } from "@/utils/API/SSGSetting";
import { MemberType } from "@/utils/interface/interface";
const IdolList = dynamic(() => import("@/component/adminPage/IdolList"));
const ReportSchedule = dynamic(
  () => import("@/component/adminPage/ReportSchedule")
);

const AdminPage = async (params: any) => {
  const path = params.params.category;

  const idolData: MemberType = await getIdolList();

  return (
    <section>
      {path === "idols" ? (
        <IdolList idolData={idolData} />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </section>
  );
};

export default AdminPage;

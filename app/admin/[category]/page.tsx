import React from "react";
import dynamic from "next/dynamic";
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

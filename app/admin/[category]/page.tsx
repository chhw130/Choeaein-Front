import React from "react";
import IdolList from "@/component/adminPage/contents/IdolList";
import { getIdolList } from "@/utils/axios/AxiosSetting";
import ReportSchedule from "@/component/adminPage/contents/ReportSchedule";

const AdminPage = async (params: any) => {
  const path = params.params.category;
  return (
    <>
      {path === "idols" ? (
        <IdolList />
      ) : path === "schedules" ? (
        <ReportSchedule />
      ) : null}
    </>
  );
};

export default AdminPage;

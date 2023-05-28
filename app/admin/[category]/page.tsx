import React from "react";
import IdolList from "@/component/adminPage/contents/IdolList";
import { getIdolList } from "@/utils/axios/AxiosSetting";

const AdminPage = async (params: any) => {
  const path = params.params.category;
  return <>{path === "idols" ? <IdolList /> : null}</>;
};

export default AdminPage;

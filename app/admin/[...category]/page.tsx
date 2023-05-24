import React from "react";
import SidebarWithHeader from "@/component/adminPage/Sidebar";
import IdolList from "@/component/adminPage/contents/IdolList";
import { getIdolList } from "@/utils/axios/AxiosSetting";

const AdminPage = async (params: any) => {
  console.log(params);
  const { idolList } = await getData();
  return (
    <>
      <IdolList idolList={idolList} />
    </>
  );
};

export default AdminPage;

const getData = async () => {
  const idolList = await getIdolList();
  return { idolList };
};

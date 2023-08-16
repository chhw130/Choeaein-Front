"use client";
import React from "react";
import { getIdolList } from "@/utils/API/SSGSetting";
import { MemberType } from "@/utils/interface/interface";
import AdminTemplate from "@/component/template/AdminTemplate";

const AdminPage = async (params: { params: any }) => {
  const path = params.params.category;

  const idolData: MemberType = await getIdolList();

  return <AdminTemplate path={path} idolData={idolData} />;
};

export default AdminPage;

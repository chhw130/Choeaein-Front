"use client";
import dynamic from "next/dynamic";
import React from "react";

const FindPassword = dynamic(
  () => import("@/component/findPage/findPassword/FindPassword")
);

const findPasswordPage = () => {
  return <FindPassword />;
};

export default findPasswordPage;

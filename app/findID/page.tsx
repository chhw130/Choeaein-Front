"use client";
import dynamic from "next/dynamic";
import React from "react";

const FindID = dynamic(() => import("@/component/findPage/findId/FindID"));

const findIDPage = async () => {
  return (
    <main>
      <FindID />
    </main>
  );
};

export default findIDPage;

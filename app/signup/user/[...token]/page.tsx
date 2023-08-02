"use client";
import dynamic from "next/dynamic";
import React from "react";

const SignUp = dynamic(() => import("@/component/singupPage/SignUp"));

const signupPage = () => {
  return (
    <main>
      <SignUp />
    </main>
  );
};

export default signupPage;

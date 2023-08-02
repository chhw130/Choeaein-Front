"use client";

import dynamic from "next/dynamic";
const VerifyEmail = dynamic(() => import("@/component/singupPage/VerifyEmail"));

const SignUpHome = () => {
  return (
    <main>
      <VerifyEmail />
    </main>
  );
};

export default SignUpHome;

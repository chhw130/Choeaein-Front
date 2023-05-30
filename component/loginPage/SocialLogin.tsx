"use client";
import { Button } from "@chakra-ui/react";
import React from "react";
import { signIn, signOut } from "next-auth/react";

const SocialLogin = () => {
  return (
    <div>
      <Button onClick={() => signIn("github")}>깃헙로그인</Button>
      <Button onClick={() => signIn("kakao")}>카카오로그인</Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </div>
  );
};

export default SocialLogin;

"use client";
import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { signIn, signOut } from "next-auth/react";

const SocialLogin = () => {
  return (
    <Center>
      <Button onClick={() => signIn("github")}>깃헙로그인</Button>
      <Button onClick={() => signIn("kakao")}>카카오로그인</Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </Center>
  );
};

export default SocialLogin;

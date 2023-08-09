import TextAtom from "@/component/atoms/Text/TextAtom";
import { HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const LoginNav = () => {
  return (
    <HStack w="100%" justifyContent={"center"}>
      <Link href="/findID" replace>
        <TextAtom>아이디 찾기</TextAtom>
      </Link>
      <TextAtom color={"gray.300"}>|</TextAtom>
      <Link href="/findpassword">비밀번호 찾기</Link>
      <TextAtom color={"gray.300"}>|</TextAtom>
      <Link href={"/signup/home"}>회원가입</Link>
    </HStack>
  );
};

export default LoginNav;

"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HeaderBtn = () => {
  return (
    <div>
      <Link href={"/login"}>
        <Button>로그인</Button>
      </Link>
    </div>
  );
};

export default HeaderBtn;

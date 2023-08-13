"use client";
import { Skeleton } from "@chakra-ui/react";
import React from "react";

const loading = () => {
  return <Skeleton paddingTop={"3rem"} h={"100vh"} />;
};

export default loading;

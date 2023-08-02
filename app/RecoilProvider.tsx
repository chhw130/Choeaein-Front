"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const RecoilRoot = dynamic(() =>
  import("recoil").then((mod) => mod.RecoilRoot)
);

interface RecoilProviderProps {
  children: ReactNode;
}

export default function RecoilProvider({ children }: RecoilProviderProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

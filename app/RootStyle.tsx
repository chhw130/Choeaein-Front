"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useStyledComponentsRegistry } from "./StyledComponent";

// import { useStyledComponentsRegistry } from "~/lib/styled-components";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

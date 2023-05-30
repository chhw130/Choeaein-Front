"use Client";
import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GitHubIcon, KaKaoIcon, NaverIcon } from "./UI/ProviderIcons";
import { signIn } from "next-auth/react";

const providers = [
  { name: "naver", icon: <NaverIcon boxSize="5" />, rgb: "#2DB400" },
  { name: "kakao", icon: <KaKaoIcon boxSize="5" />, rgb: "#F7E600" },
  { name: "github", icon: <GitHubIcon boxSize="5" />, rgb: "white" },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon, rgb }) => (
      <Button
        key={name}
        width="full"
        onClick={() => signIn(name)}
        bgColor={rgb}
      >
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);

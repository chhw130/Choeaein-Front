"use Client";
import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./UI/ProviderIcons";
import { signIn } from "next-auth/react";

const providers = [
  { name: "Google", icon: <GoogleIcon boxSize="5" /> },
  { name: "kakao", icon: <TwitterIcon boxSize="5" /> },
  { name: "github", icon: <GitHubIcon boxSize="5" /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full" onClick={() => signIn(name)}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);

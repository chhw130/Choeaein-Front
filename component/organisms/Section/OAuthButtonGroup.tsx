"use Client";
import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import kakao from "../../public/img/sns/Kakao.png";
import naver from "../../public/img/sns/Naver.png";
import github from "../../public/img/sns/Github.png";

const providers = [
  { name: "naver", icon: naver, rgb: "#2DB400" },
  { name: "kakao", icon: kakao, rgb: "#F7E600" },
  { name: "github", icon: github, rgb: "white" },
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
        <Image alt={name} width={30} height={30} src={icon} />
      </Button>
    ))}
  </ButtonGroup>
);

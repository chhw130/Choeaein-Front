"use client";
import {
  Button,
  Heading,
  HStack,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const color = useColorMode().colorMode;
  const router = useRouter();

  return (
    <HStack
      as={"section"}
      bg="white"
      justifyContent="space-evenly"
      minH="100vh"
      paddingTop={"10rem"}
      bgColor={
        color === "light" ? "white" : "var(--chakra-colors-chakra-body-bg);"
      }
    >
      <VStack
        h={"100vh"}
        alignItems={"flex-start"}
        position={"relative"}
        spacing="10"
      >
        <Button
          onClick={() => router.replace("/")}
          right={0}
          pos={"relative"}
          size={"lg"}
          position="relative"
          variant={"solid"}
          bg={"gray.400"}
        >
          &larr; Go Home
        </Button>
        <VStack spacing={10}>
          <Heading size={"2xl"}>
            죄송합니다. 해당 페이지를 찾을 수 없습니다.
          </Heading>
          <Heading size={"lg"}>요즘 떠오르는 아이돌들을 살펴보세요.</Heading>
        </VStack>
        <VStack spacing={2}></VStack>
      </VStack>
    </HStack>
  );
}

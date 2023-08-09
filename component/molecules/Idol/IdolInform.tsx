"use client";
import { Avatar, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { memo } from "react";
import TextAtom from "../../atoms/Text/TextAtom";

const IdolInform = ({ idolData }: any) => {
  const router = useRouter();

  return (
    <HStack spacing={2} onClick={() => router.back()} cursor={"pointer"}>
      <Avatar src={idolData.idol_profile} />
      <TextAtom fontSize={[30, 30, 40]}>{idolData?.idol_name_kr}</TextAtom>
    </HStack>
  );
};

export default memo(IdolInform);

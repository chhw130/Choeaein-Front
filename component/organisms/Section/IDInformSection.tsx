import TextAtom from "@/component/atoms/Text/TextAtom";
import { Center, Flex } from "@chakra-ui/react";
import React from "react";

interface IDInformSectionProps {
  idData: { ID: string };
}

const IDInformSection = ({ idData }: IDInformSectionProps) => {
  return (
    <Center as="section" marginTop={"2rem"}>
      {idData ? (
        <Flex flexDir="row" fontSize="2xl">
          아이디는 &nbsp;
          <TextAtom color="red" fontWeight="bold">
            " {idData.ID} "
          </TextAtom>
          &nbsp;입니다.
        </Flex>
      ) : null}
    </Center>
  );
};

export default IDInformSection;

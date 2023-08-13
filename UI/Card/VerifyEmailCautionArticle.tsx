import TextAtom from "@/component/atoms/Text/TextAtom";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

const VerifyEmailCautionArticle = () => {
  return (
    <Box as="article" marginTop={"20px"}>
      <TextAtom as={"h1"} fontSize={["13px", "15px", "20px"]} color={"red"}>
        주의 사항
      </TextAtom>
      <VStack
        fontSize={["10px", "13px", "15px"]}
        spacing={2}
        alignItems={"flex-start"}
        marginTop={"1rem"}
      >
        <TextAtom>👉 인증된 이메일은 아이디로 사용됩니다.</TextAtom>
        <TextAtom>
          👉 이미 존재하는 이메일의 경우 회원가입이 불가능합니다.
        </TextAtom>
        <TextAtom>
          👉 인증 완료 후 회원가입 진행을 하지않은 경우 별도의 <br />
          &nbsp;&nbsp;&nbsp; 인증 없이 회원가입 페이지로 넘어갑니다.
        </TextAtom>
      </VStack>
    </Box>
  );
};

export default VerifyEmailCautionArticle;

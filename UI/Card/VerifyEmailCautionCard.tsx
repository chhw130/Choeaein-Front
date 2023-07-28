import { Card, CardBody, CardHeader, Text, VStack } from "@chakra-ui/react";
import React from "react";

const VerifyEmailCautionCard = () => {
  return (
    <Card as="article" marginTop={"20px"}>
      <CardHeader>
        <Text as={"h1"} fontSize={"xl"} color={"red"}>
          주의 사항
        </Text>
      </CardHeader>
      <CardBody>
        <VStack spacing={2} alignItems={"flex-start"}>
          <Text>👉 인증된 이메일은 아이디로 사용됩니다.</Text>
          <Text>👉 이미 존재하는 이메일의 경우 회원가입이 불가능합니다.</Text>
          <Text>
            👉 인증 완료 후 회원가입 진행을 하지않은 경우 별도의 <br />
            &nbsp;&nbsp;&nbsp; 인증 없이 회원가입 페이지로 넘어갑니다.
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default VerifyEmailCautionCard;

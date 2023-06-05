"use client";

import { useForm } from "react-hook-form";
import styles from "./EditUser.module.scss";
import EditUserImg from "./EditUserImg";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

const EditUser = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  /**회원정보 수정 */
  const onSubmit = (data: any) => {
    const changeData = {
      old_password: data.oldPassword,
      new_password: data.newPassword,
    };
  };

  return (
    <Box w="90%" paddingTop="100px" margin="0 auto">
      <Text fontSize="2vw" fontWeight="800">
        회원정보 수정
      </Text>
      <Box>
        <EditUserImg />
        <hr />
        <VStack
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          padding="30px 0"
          margin=" 0 auto"
        >
          <HStack spacing={5} width="80%">
            <Text w="15%">아이디</Text>
            <div className={styles.absoluteInform}>{"email"}</div>
          </HStack>
          <Flex justifyContent="space-between" width="80%">
            <HStack spacing={5}>
              <label>비밀번호</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="기존 비밀번호를 입력해야 비밀번호 변경이 가능합니다!!"
                {...register("oldPassword", {
                  required: {
                    value: true,
                    message: "비밀번호를 입력하세요.",
                  },
                  minLength: {
                    value: 8,
                    message: "비밀번호는 8자 이상 입력하세요.",
                  },
                  maxLength: {
                    value: 16,
                    message: "비밀번호는 16자 이하로 입력하세요.",
                  },
                })}
              />
            </HStack>
            <Button>수정</Button>
          </Flex>

          <label>별명</label>
          <div className={styles.absoluteInform}>{"nickname"}</div>

          <div className={styles.buttonDiv}>
            <button type="button">이전</button>
            <button>수정하기</button>
          </div>
        </VStack>
      </Box>
    </Box>
  );
};

export default EditUser;

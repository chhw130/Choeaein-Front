"use client";
import { useForm } from "react-hook-form";
import styles from "./EditUserImg.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { Avatar, Box, Input, VStack } from "@chakra-ui/react";

const EditUserImg = () => {
  const { register, handleSubmit } = useForm();

  const imgSubmit = () => {};

  return (
    <VStack spacing={5}>
      <h2>프로필 정보</h2>
      <Avatar src="" size="2xl" />
      <Box
        as="form"
        className={styles.uploadForm}
        onSubmit={handleSubmit(imgSubmit)}
        cursor="pointer"
      >
        <Box
          position="relative"
          top="-60px"
          left={"-40px"}
          borderRadius="50%"
          width="50px"
          height="50px"
          lineHeight="47px"
          backgroundColor="#fccec0"
          textAlign="center"
        >
          <Input
            type="file"
            cursor="pointer"
            {...register("file")}
            accept="image/*"
            position="absolute"
            transform="scale(1)"
            left={"0"}
            top={"5px"}
            opacity={0}
          />
          <FontAwesomeIcon
            icon={faCamera}
            style={{ color: "white" }}
            fixedWidth
            size="xl"
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default EditUserImg;

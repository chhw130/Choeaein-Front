"use client";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { Avatar, Box, Button, Input, VStack } from "@chakra-ui/react";
import { getUploadUrl } from "@/utils/API/CSRSetting";

const EditUserImg = () => {
  const { register, handleSubmit } = useForm();

  const imgSubmit = async (data: any) => {
    const res = await getUploadUrl(data);
    console.log(res);
  };

  const settingThumbnail = () => {};

  return (
    <VStack spacing={5}>
      <h2>프로필 정보</h2>
      <Avatar src="" size="2xl" />
      <Box as="form" onSubmit={handleSubmit(imgSubmit)} cursor="pointer">
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
            // onChange={settingThumbnail()}
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

        <Button type="submit">변경하기</Button>
      </Box>
    </VStack>
  );
};

export default EditUserImg;

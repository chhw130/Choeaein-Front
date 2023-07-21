"use client";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { getUploadUrl } from "@/utils/API/CSRSetting";
import { FiFile } from "react-icons/fi";

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
        <Card
          position="relative"
          cursor="pointer"
          top="-60px"
          left={"-40px"}
          borderRadius="50%"
          width="50px"
          height="50px"
          lineHeight="47px"
          textAlign="center"
        >
          <Box position="absolute" left={"10px"} cursor="pointer">
            <FontAwesomeIcon
              icon={faCamera}
              fixedWidth
              size="xl"
              cursor="pointer"
            />
          </Box>
          <Input
            type="file"
            // onChange={settingThumbnail()}
            {...register("file")}
            accept="image/*"
            position="absolute"
            cursor="pointer"
            transform="scale(1)"
            left={"0px"}
            top={"5px"}
            opacity={0}
          />
        </Card>

        <Button type="submit">변경하기</Button>
      </Box>
    </VStack>
  );
};

export default EditUserImg;

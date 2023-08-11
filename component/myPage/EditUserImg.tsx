"use client";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import {
  Avatar,
  Box,
  Button,
  Card,
  Input,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { getUploadUrl } from "@/utils/API/CSRSetting";
import TextAtom from "../atoms/Text/TextAtom";
import InputAtom from "../atoms/Input/InputAtom";

const EditUserImg = () => {
  const { register, handleSubmit } = useForm();
  const { colorMode } = useColorMode();

  const imgSubmit = async (data: any) => {
    const res = await getUploadUrl(data);
  };

  return (
    <VStack spacing={5}>
      <TextAtom as={"h2"}>프로필 정보</TextAtom>
      <Avatar src="" size="2xl" />
      <Box as="form" onSubmit={handleSubmit(imgSubmit)} cursor="pointer">
        <Box
          position="relative"
          cursor="pointer"
          shadow={"base"}
          top="-60px"
          left={"-40px"}
          borderRadius="50%"
          width="50px"
          height="50px"
          lineHeight="47px"
          textAlign="center"
          bg={colorMode === "dark" ? "black" : "white"}
        >
          <Box position="absolute" left={"10px"} cursor="pointer">
            <FontAwesomeIcon
              icon={faCamera}
              fixedWidth
              size="xl"
              cursor="pointer"
            />
          </Box>
          <InputAtom
            type="file"
            register={{ ...register("file") }}
            accept="image/*"
            pos="absolute"
            cursor="pointer"
            opacity={0}
          />
        </Box>
        <Button type="submit" top={-10}>
          변경하기
        </Button>
      </Box>
    </VStack>
  );
};

export default EditUserImg;

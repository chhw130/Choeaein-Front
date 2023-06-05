import IdolOption from "@/component/singupPage/IdolOption";
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
const ModifyPick = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const modifyPickHandler = () => {};

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>비밀번호 수정하기</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(modifyPickHandler)}>
            <ModalBody>
              <FormLabel margin={0} htmlFor="password">
                아이돌
              </FormLabel>
              <Select>
                <IdolOption />
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button type="submit">수정하기</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Flex justifyContent="space-between" width="80%" height="100px">
        <HStack spacing={5}>
          <Text w="60px" fontWeight={"bold"}>
            최애
          </Text>
          <Avatar
            size={"xl"}
            src="https://a-static.besthdwallpaper.com/karina-from-aespa-life-s-too-short-mv-photoshoot-girls-album-wallpaper-1920x1080-100897_48.jpg"
          />
        </HStack>
        <Button margin="auto 0" onClick={onOpen}>
          수정
        </Button>
      </Flex>
    </>
  );
};

export default ModifyPick;

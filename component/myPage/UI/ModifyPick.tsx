import ModifyPickModal from "@/UI/Modal/ModifyPickModal";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ModifyPick = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ModifyPickModal isOpen={isOpen} onClose={onClose} />
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

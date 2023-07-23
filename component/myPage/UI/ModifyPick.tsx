import ModifyPickModal from "@/UI/Modal/ModifyPickModal";
import { UserData } from "@/utils/interface/interface";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ModifyPick = ({ userData }: { userData: UserData }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ModifyPickModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" width="80%" height="100px">
        <HStack spacing={5}>
          <Text w="70px" fontWeight={"bold"} fontSize={"lg"}>
            최애
          </Text>
          <Avatar size={"xl"} src={userData?.idol_profile} />
        </HStack>
        <Button margin="auto 0" onClick={onOpen}>
          수정
        </Button>
      </Flex>
    </>
  );
};

export default ModifyPick;

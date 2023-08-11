import TextAtom from "@/component/atoms/Text/TextAtom";
import { UserData } from "@/utils/interface/interface";
import { Avatar, Button, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ModifyPickModal = dynamic(() => import("@/UI/Modal/ModifyPickModal"));

const ModifyPick = ({ userData }: { userData: UserData }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ModifyPickModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" width="80%" height="100px">
        <HStack spacing={5}>
          <TextAtom w="70px" fontWeight={"bold"} fontSize={"lg"}>
            최애
          </TextAtom>
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

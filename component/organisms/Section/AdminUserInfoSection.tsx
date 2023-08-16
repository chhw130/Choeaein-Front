import useUser from "@/utils/hook/useUser";
import { Avatar, Box, Center, Flex, Stack } from "@chakra-ui/react";
import TextAtom from "../../atoms/Text/TextAtom";

export default function AdimnUserInforSection() {
  const { userData } = useUser();

  return (
    <Center py={6} marginTop={20}>
      <Box>
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={userData?.profileImg}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={2}>
          <Stack spacing={0} align={"center"}>
            <TextAtom color={"gray.500"}>{userData?.email}</TextAtom>
            <TextAtom color={"gray.500"}>({userData?.nickname})</TextAtom>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

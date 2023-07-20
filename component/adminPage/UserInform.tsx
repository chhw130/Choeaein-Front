import useUser from "@/utils/hook/useUser";
import { Avatar, Box, Center, Flex, Text, Stack } from "@chakra-ui/react";

export default function UserInform() {
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
            <Text color={"gray.500"}>{userData?.email}</Text>
            <Text color={"gray.500"}>({userData?.nickname})</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function UserInform() {
  return (
    <Center py={6} marginTop={20}>
      <Box>
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text color={"gray.500"}>Admin1</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

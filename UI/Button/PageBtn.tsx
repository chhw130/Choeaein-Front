import { Box, Button, ButtonGroup, HStack, Text } from "@chakra-ui/react";
import React from "react";

const PageBtn = ({
  gotoPage,
  previousPage,
  canPreviousPage,
  pageIndex,
  nextPage,
  canNextPage,
  pageCount,
  pageOptions,
}: any) => {
  return (
    <ButtonGroup
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDir="column"
      margin="30px auto"
      w="100%"
    >
      <HStack display="flex" flexDir="row" spacing={3}>
        <Button
          onClick={() => gotoPage(0)}
          borderRadius={10}
          border={"1px solid black"}
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => previousPage()}
          colorScheme="cyan"
          disabled={!canPreviousPage}
        >
          이전
        </Button>
        <Text w={10} textAlign="center">
          {pageIndex + 1}
        </Text>
        <Button
          onClick={() => nextPage()}
          colorScheme="twitter"
          disabled={!canNextPage}
        >
          다음
        </Button>
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          borderRadius={10}
          border={"1px solid black"}
        >
          {">>"}
        </Button>
      </HStack>
      <Box paddingTop={4}>
        Page {pageIndex + 1} / {pageOptions.length}
      </Box>
    </ButtonGroup>
  );
};

export default PageBtn;

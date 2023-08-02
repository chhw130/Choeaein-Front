import { Box, ButtonGroup, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ButtonAtom from "../../atoms/Button/ButtonAtom";

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
        <ButtonAtom
          onClick={() => gotoPage(0)}
          borderRadius={10}
          border={"1px solid black"}
        >
          {"<<"}
        </ButtonAtom>
        <ButtonAtom
          onClick={() => previousPage()}
          colorScheme="cyan"
          disabled={!canPreviousPage}
        >
          이전
        </ButtonAtom>
        <Text w={10} textAlign="center">
          {pageIndex + 1}
        </Text>
        <ButtonAtom
          onClick={() => nextPage()}
          colorScheme="twitter"
          disabled={!canNextPage}
        >
          다음
        </ButtonAtom>
        <ButtonAtom
          onClick={() => gotoPage(pageCount - 1)}
          borderRadius={10}
          border={"1px solid black"}
        >
          {">>"}
        </ButtonAtom>
      </HStack>
      <Box paddingTop={4}>
        Page {pageIndex + 1} / {pageOptions.length}
      </Box>
    </ButtonGroup>
  );
};

export default PageBtn;

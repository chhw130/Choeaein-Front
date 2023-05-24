"use client";
import {
  faFileArrowUp,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ReportTable.module.scss";
import { IdolData } from "@/app/admin/[...category]/interface";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

const IdolList = ({ idolList: idolData }: { idolList: IdolData[] }) => {
  const data = useMemo(() => idolData, []);
  const COLUMS = [
    {
      Header: "Pk",
      accessor: "pk",
    },
    {
      Header: "",
      accessor: "idol_profile",
      Cell: ({
        cell: {
          // @ts-ignore
          value,
        },
      }) => <Img src={value} maxW={"100px"} />,
    },
    {
      Header: "Idol_name_kr",
      accessor: "idol_name_kr",
    },
    {
      Header: "Idol_name_en",
      accessor: "idol_name_en",
    },
    {
      Header: "Girl_group",
      accessor: "Girl_group",
    },
    {
      Header: "Boy_group",
      accessor: "Boy_group",
    },
    {
      Header: "Edit",
    },
  ];
  const columns = useMemo(() => COLUMS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // @ts-ignore
    page,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    pageCount,
    state,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    usePagination
  );

  const {
    // @ts-ignore
    pageIndex,
  } = state;

  return (
    <>
      <TableContainer>
        <Table {...getTableProps()}>
          <Thead overscroll="auto">
            {headerGroups.map((headergroup, index) => (
              <Tr {...headergroup.getHeaderGroupProps()} key={index}>
                {headergroup.headers.map((column, index) => (
                  <Th {...column.getHeaderProps()} key={index}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page?.map((row: any, index: any) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell: any) => {
                    const { key, ...restCellProps } = cell.getCellProps();
                    return (
                      <Td {...restCellProps} key={key}>
                        {cell.render("Cell")}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <ButtonGroup
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDir="column"
          margin="0 auto"
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
            <p>{pageIndex + 1}</p>
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
      </TableContainer>
    </>
  );
};

export default IdolList;

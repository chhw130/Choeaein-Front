"use client";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ReportTable.module.scss";
import { IdolData } from "@/app/admin/[category]/interface";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";
import { getUserReportSchedule } from "@/utils/axios/AxiosSetting";
import SkeletonUI from "../UI/SkeletonUI";

const ReportSchedule = () => {
  const { data: scheduleData = [], isLoading } = useQuery(
    ["userReportSchedule"],
    () => getUserReportSchedule()
  );

  const data = useMemo(() => scheduleData, [scheduleData]);
  const COLUMS = [
    {
      Header: "idol",
      accessor: "whoes[0].idol_name_kr",
    },
    {
      Header: "아이돌 이름",
      accessor: "whoes[0].idol_en_kr",
    },
    {
      Header: "제보자",
      accessor: "owner.nickname",
    },
    {
      Header: "스케줄 이름",
      accessor: "title",
    },
    {
      Header: "스케줄 내용",
      accessor: "content",
    },
    {
      Header: "스케줄 종류",
      accessor: "type",
    },
    {
      Header: "장소",
      accessor: "location",
    },
    {
      Header: "시간",
      accessor: "time",
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
          <Thead overscroll="auto" key={page.id}>
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
          {!isLoading ? (
            <Tbody {...getTableBodyProps()} textAlign="center" key={page.id}>
              {page?.map((row: any, index: number) => {
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
          ) : (
            <SkeletonUI columnLength={COLUMS} />
          )}
        </Table>
      </TableContainer>
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
    </>
  );
};

export default ReportSchedule;

"use client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";
import { getIdolList } from "@/utils/axios/AxiosSetting";
import SkeletonUI from "../../UI/Skeleton/SkeletonUI";
import PageBtn from "../../UI/Button/PageBtn";

const IdolList = () => {
  const { data: idolData = [], isLoading } = useQuery(["idolData"], () =>
    getIdolList()
  );

  const data = useMemo(() => idolData, [idolData]);

  const COLUMS = [
    {
      Header: "idol",
      accessor: "idol_profile",
      Cell: ({
        cell: {
          // @ts-ignore
          value,
        },
      }) => {
        return (
          <>
            <Box width={140} position="static" key={value}>
              <Image
                src={value}
                width={1000}
                height={1000}
                alt="아이돌"
                loading="lazy"
                style={{
                  width: "60%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />
            </Box>
          </>
        );
      },
    },
    {
      Header: "Idol_name_kr",
      accessor: "idol_name_kr",
    },
    // {
    //   Header: "Idol_name_en",
    //   accessor: "idol_name_en",
    // },
    {
      Header: "Girl_group",
      accessor: "Girl_group",
    },
    {
      Header: "idol_birthday",
      accessor: "idol_birthday",
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
      // @ts-ignore
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
      <PageBtn
        gotoPage={gotoPage}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        pageIndex={pageIndex}
        canNextPage={canNextPage}
        nextPage={nextPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
      />
    </>
  );
};

export default IdolList;

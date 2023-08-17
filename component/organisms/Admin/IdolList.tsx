"use client";
import PageBtn from "@/component/molecules/ButtonGroup/PageBtnGroup";
import IdolListTable from "@/component/molecules/Table/IdolListTable";
import { MemberType } from "@/utils/interface/interface";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";

const IdolList = ({ idolData }: { idolData: MemberType }) => {
  const data = useMemo(() => idolData, [idolData]);

  console.log(data);

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
    {
      Header: "Idol_name_en",
      accessor: "idol_name_en",
    },
    {
      Header: "Idol_birthday",
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
      <IdolListTable
        getTableBodyProps={getTableBodyProps}
        getTableProps={getTableProps}
        page={page}
        headerGroups={headerGroups}
        prepareRow={prepareRow}
      />
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

"use client";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import {
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { getUserReportSchedule } from "@/utils/API/CSRSetting";
import SkeletonUI from "../../UI/Skeleton/SkeletonUI";
import PageBtn from "../../UI/Button/PageBtn";
import ReportScheduleBtn from "@/UI/Button/ReportScheduleBtn";

const ReportSchedule = () => {
  const { data: scheduleData = [], isLoading } = useQuery(
    ["userReportSchedule"],
    () => getUserReportSchedule()
  );

  const data = useMemo(() => scheduleData, [scheduleData]);
  const COLUMS = [
    {
      Header: "idol",
      accessor: "whoes[0]",
    },
    {
      Header: "제보자",
      accessor: "owner",
    },
    {
      Header: "스케줄 이름",
      accessor: "ScheduleTitle",
    },
    {
      Header: "스케줄 종류",
      accessor: "ScheduleType.type",
    },
    {
      Header: "장소",
      accessor: "location",
    },
    {
      Header: "시간",
      accessor: "when",
    },
    // {
    //   Header: "control",
    //   accessor: "pk",

    //   Cell: (
    //     // @ts-ignore
    //     { cell: { value } }
    //   ) => {
    //     return <ReportScheduleBtn value={value} />;
    //   },
    // },
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
      {!isLoading && data.length === 0 ? (
        <Center h="450px" fontSize={"28px"}>
          제보받은 스케줄이 없습니다.
        </Center>
      ) : (
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
                  <Th key={"control"}>관리</Th>
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
                      <Td key={"contorl"}>
                        <ReportScheduleBtn row={row} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            ) : (
              <SkeletonUI columnLength={COLUMS} />
            )}
          </Table>
        </TableContainer>
      )}
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

export default ReportSchedule;

import PageBtn from "@/component/molecules/ButtonGroup/PageBtnGroup";
import UserReportScheduleTable from "@/component/molecules/Table/UserReportScheduleTable";
import { getUserReportSchedule } from "@/utils/API/CSRSetting";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";

const UserReportScheduleList = () => {
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
      <UserReportScheduleTable
        getTableProps={getTableProps}
        page={page}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        COLUMS={COLUMS}
        isLoading={isLoading}
        data={data}
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

export default UserReportScheduleList;

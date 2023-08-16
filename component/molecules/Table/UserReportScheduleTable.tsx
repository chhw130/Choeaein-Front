import SkeletonUI from "@/component/atoms/Skeleton/SkeletonUI";
import {
  Center,
  Table,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import ReportScheduleBtn from "../ButtonGroup/ReportScheduleBtnGroup";
import {
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
} from "react-table";

interface UserReportScheduleTableProps {
  getTableProps: (
    propGetter?: TablePropGetter<object> | undefined
  ) => TableProps;
  page: any;
  headerGroups: HeaderGroup<object>[];
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<object> | undefined
  ) => TableBodyProps;
  prepareRow: (row: Row<object>) => void;
  COLUMS: {
    Header: string;
    accessor: string;
  }[];
  isLoading: boolean;
  data: any;
}

const UserReportScheduleTable = ({
  getTableProps,
  page,
  headerGroups,
  getTableBodyProps,
  prepareRow,
  COLUMS,
  isLoading,
  data,
}: UserReportScheduleTableProps) => {
  return (
    <>
      {!isLoading && data.length === 0 ? (
        <Center h="100vh" fontSize={"28px"}>
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
    </>
  );
};

export default UserReportScheduleTable;

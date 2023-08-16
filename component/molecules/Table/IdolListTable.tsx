"use client";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import {
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
  TableProps,
} from "react-table";

interface IdolListTableProps {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<object> | undefined
  ) => TableBodyProps;
  getTableProps: (
    propGetter?: TablePropGetter<object> | undefined
  ) => TableProps;
  page: any;
  headerGroups: HeaderGroup<object>[];
  prepareRow: (row: Row<object>) => void;
}

const IdolListTable = ({
  getTableBodyProps,
  getTableProps,
  page,
  headerGroups,
  prepareRow,
}: IdolListTableProps) => {
  return (
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
      </Table>
    </TableContainer>
  );
};

export default IdolListTable;

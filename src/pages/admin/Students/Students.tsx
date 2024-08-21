import React, { useState } from "react";
import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from "../../../redux/features/admin/types";
import { Link } from "react-router-dom";

export type TTableData = Pick<TStudent, "fullName" | "id">;
export const Students = () => {
  // state
  const { data, isLoading, isFetching } = useGetAllStudentsQuery(undefined);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
    },
    {
      title: "id",
      key: "id",
      dataIndex: "id",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];
  //   const onChange: TableProps<TTableData>["onChange"] = (
  //     _pagination,
  //     filters,
  //     _sorter,
  //     extra
  //   ) => {
  //     let queryParams: TQueryParams[] = [];
  //     if (extra.action == "filter") {
  //       filters?.name?.map((val) =>
  //         queryParams.push({ name: "name", value: val })
  //       );
  //       filters?.year?.map((val) =>
  //         queryParams.push({ name: "year", value: val })
  //       );
  //       setParams(queryParams);
  //     }
  //   };
  return (
    <Table
      loading={isLoading || isFetching}
      columns={columns}
      dataSource={data?.data}
      //   onChange={onChange}
    />
  );
};

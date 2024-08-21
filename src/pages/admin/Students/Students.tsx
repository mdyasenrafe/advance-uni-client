import React, { useState } from "react";
import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TQueryParams, TStudent } from "../../../redux/features/admin/types";
import { Link } from "react-router-dom";

export type TTableData = Pick<TStudent, "fullName" | "id">;
export const Students = () => {
  // state
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isLoading, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 1 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

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
        return (
          <Space>
            <Link to={`/admin/student-details/${item?._id}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  console.log(page);

  return (
    <React.Fragment>
      <Table
        loading={isLoading || isFetching}
        columns={columns}
        dataSource={data?.data}
        pagination={false}
        //   onChange={onChange}
      />
      <Pagination
        total={data?.meta?.total}
        pageSize={data?.meta?.limit}
        onChange={(value) => setPage(value)}
      />
    </React.Fragment>
  );
};

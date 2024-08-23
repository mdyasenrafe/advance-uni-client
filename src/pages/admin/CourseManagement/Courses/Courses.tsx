import React, { useState } from "react";
import { Button, Space, Table, TableColumnsType } from "antd";
import { useGetCoursesQuery } from "../../../../redux/features/admin/courseManagement.api";
import { TCourse, TQueryParams } from "../../../../redux/features/admin/types";

type TTableData = Pick<TCourse, "title" | "_id" | "code">;

export const Courses = () => {
  // state
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isLoading, isFetching } = useGetCoursesQuery(params);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Space>
            <Button>Assign Faculty</Button>
          </Space>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <Table
        loading={isLoading || isFetching}
        columns={columns}
        dataSource={data?.data}
        pagination={false}
      />
    </React.Fragment>
  );
};

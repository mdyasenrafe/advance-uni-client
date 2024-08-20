import React, { useState } from "react";
import { useGetAllAcademicSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import {
  TAcademicSemester,
  TQueryParams,
} from "../../../../redux/features/admin/types";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "_id" | "year" | "startMonth" | "endMonth"
>;
export const AcaemicSemester = () => {
  // state
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isLoading, isFetching } =
    useGetAllAcademicSemesterQuery(params);

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
        {
          text: "2029",
          value: "2029",
        },
      ],
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];
  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    let queryParams: TQueryParams[] = [];
    if (extra.action == "filter") {
      filters?.name?.map((val) =>
        queryParams.push({ name: "name", value: val })
      );
      filters?.year?.map((val) =>
        queryParams.push({ name: "year", value: val })
      );
      setParams(queryParams);
    }
  };
  return (
    <Table
      loading={isLoading || isFetching}
      columns={columns}
      dataSource={data?.data}
      onChange={onChange}
    />
  );
};

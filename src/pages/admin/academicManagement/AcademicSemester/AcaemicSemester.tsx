import React from "react";
import { useGetAllAcademicSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import { Button, Table, TableColumnsType } from "antd";
import { TAcademicSemester } from "../../../../redux/features/admin/types";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "_id" | "year" | "startMonth" | "endMonth"
>;
export const AcaemicSemester = () => {
  const { data, isLoading } = useGetAllAcademicSemesterQuery(undefined);
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
  return (
    <Table loading={isLoading} columns={columns} dataSource={data?.data} />
  );
};

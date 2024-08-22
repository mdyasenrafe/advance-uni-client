import React, { useState } from "react";
import { useGetAllAcademicSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import {
  Button,
  Dropdown,
  MenuProps,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
  message,
} from "antd";
import {
  TAcademicSemester,
  TQueryParams,
  TSemester,
} from "../../../../redux/features/admin/types";
import {
  useGetRegisteredSemestersQuery,
  useUpdateSemesterRegisterMutation,
} from "../../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { toast } from "sonner";

export type TTableData = Pick<
  TSemester,
  "_id" | "startDate" | "endDate" | "status" | "academicSemester"
>;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

export const RegisteredSemesters = () => {
  // states
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [selectedId, setSelectedId] = useState("");
  // api hooks
  const { data, isLoading, isFetching } =
    useGetRegisteredSemestersQuery(params);
  const [updateSemester] = useUpdateSemesterRegisterMutation();

  const handleMenuClick: MenuProps["onClick"] = async (e) => {
    const toastId = toast.loading("Updating...");
    if (selectedId) {
      try {
        const data = {
          id: selectedId,
          body: {
            status: e.key,
          },
        };
        const res = await updateSemester(data).unwrap();
        const toastId = toast.success("Updated...");
      } catch (err: any) {
        toast.error(err?.data?.message, { id: toastId });
      }
    } else {
      toast.error("something went wrong pls try again", { id: toastId });
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "academicSemester",
      render: (academicSemester: TAcademicSemester) => {
        return `${academicSemester.name} ${academicSemester.year}`;
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        return <Tag>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
      render: (item) => {
        return (
          <div>
            <p>{moment(new Date(item)).format("MMMM")}</p>
          </div>
        );
      },
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
      render: (item) => {
        return (
          <div>
            <p>{moment(new Date(item)).format("MMMM")}</p>
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSelectedId(item?._id)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <Table
      loading={isLoading || isFetching}
      columns={columns}
      dataSource={data?.data}
    />
  );
};

import React, { useState } from "react";
import { useGetAllAcademicSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import {
  Button,
  Dropdown,
  MenuProps,
  Space,
  Table,
  TableColumnsType,
  Tag,
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

const semesterStatusOptions = [
  { label: "Upcoming", key: "UPCOMING" },
  { label: "Ongoing", key: "ONGOING" },
  { label: "Ended", key: "ENDED" },
];

export const RegisteredSemesters = () => {
  // State management
  const [queryParams, setQueryParams] = useState<TQueryParams[]>([]);
  const [selectedSemesterId, setSelectedSemesterId] = useState<string>("");

  // API hooks
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetRegisteredSemestersQuery(queryParams);
  const [updateSemesterStatus] = useUpdateSemesterRegisterMutation();

  // Handle status update from the dropdown menu
  const handleStatusUpdate: MenuProps["onClick"] = async ({ key }) => {
    const loadingToastId = toast.loading("Updating...");

    if (selectedSemesterId) {
      try {
        await updateSemesterStatus({
          id: selectedSemesterId,
          body: { status: key },
        }).unwrap();
        toast.success("Semester status updated successfully", {
          id: loadingToastId,
        });
      } catch (error: any) {
        toast.error(error?.data?.message || "Failed to update status", {
          id: loadingToastId,
        });
      }
    } else {
      toast.error("No semester selected. Please try again.", {
        id: loadingToastId,
      });
    }
  };

  const statusMenuProps = {
    items: semesterStatusOptions,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Semester",
      key: "academicSemester",
      dataIndex: "academicSemester",
      render: (academicSemester: TAcademicSemester) =>
        `${academicSemester.name} ${academicSemester.year}`,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => <Tag>{status}</Tag>,
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
      render: (startDate) => moment(startDate).format("MMMM"),
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
      render: (endDate) => moment(endDate).format("MMMM"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (semester: TTableData) => (
        <Dropdown menu={statusMenuProps} trigger={["click"]}>
          <Button onClick={() => setSelectedSemesterId(semester._id)}>
            <Space>Update</Space>
          </Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      loading={isLoading || isFetching}
      columns={columns}
      dataSource={semesterData?.data}
      rowKey="_id"
    />
  );
};

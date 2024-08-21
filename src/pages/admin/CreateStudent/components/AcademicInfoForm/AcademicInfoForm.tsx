import { Col, Divider, Row } from "antd";
import React, { useMemo } from "react";
import {
  useGetAcademicDepartmentsQuery,
  useGetAllAcademicSemesterQuery,
} from "../../../../../redux/features/admin/academicManagement.api";
import { FormSelect } from "../../../../../components/form";

type SelectOptions = { value: string; label: string; disabled?: boolean }[];

export const AcademicInfoForm: React.FC = () => {
  const { data: semesterData, isLoading: isSemesterLoading } =
    useGetAllAcademicSemesterQuery([]);
  const { data: academicData, isLoading: isDepartmentLoading } =
    useGetAcademicDepartmentsQuery([]);

  const semesterOptions: SelectOptions = useMemo(
    () =>
      semesterData?.data?.map((semester) => ({
        value: semester._id,
        label: `${semester.name} ${semester.year}`,
      })) || [],
    [semesterData]
  );
  const departmentOptions: SelectOptions = useMemo(
    () =>
      academicData?.data?.map((academic) => ({
        value: academic._id,
        label: `${academic.name}`,
      })) || [],
    [academicData]
  );

  return (
    <>
      <Divider>Academic Info</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormSelect
            options={semesterOptions}
            name="admissionSemester"
            label="Admission Semester"
            disabled={isSemesterLoading}
          />
        </Col>

        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormSelect
            options={departmentOptions}
            disabled={isDepartmentLoading}
            name="academicDepartment"
            label="Admission Department"
          />
        </Col>
      </Row>
    </>
  );
};

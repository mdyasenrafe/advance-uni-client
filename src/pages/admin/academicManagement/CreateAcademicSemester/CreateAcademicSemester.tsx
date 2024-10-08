import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  FormInput,
  FromWrapper,
  FormSelect,
} from "../../../../components/form";
import { Button, Col, Flex } from "antd";
import { monthOptions } from "../../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../../types";

export const semesterOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 5 }).map((number, index) => {
  return {
    label: String(currentYear + index),
    value: String(currentYear + index),
  };
});

export const CreateAcademicSemester = () => {
  const [addAcademicSemester, { isLoading }] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const name = semesterOptions[Number(data?.name - 1)];
    try {
      const semesterData = {
        name: name?.label,
        code: name?.value,
        year: data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
      };
      const res = (await addAcademicSemester(
        semesterData
      ).unwrap()) as TResponse<any>;
      toast.success("Semester created", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FromWrapper
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <FormSelect name="name" label="Name" options={semesterOptions} />
          <FormSelect name="year" label="Year" options={yearOptions} />
          <FormSelect
            name="startMonth"
            label="Start Month"
            options={monthOptions}
          />

          <FormSelect
            name="endMonth"
            label="End Month"
            options={monthOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Col>
    </Flex>
  );
};

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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data?.name - 1)];
    const semesterData = {
      name: name?.label,
      code: name?.value,
    };
    console.log(data);
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

          <FormSelect name="endMonth" label="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Col>
    </Flex>
  );
};

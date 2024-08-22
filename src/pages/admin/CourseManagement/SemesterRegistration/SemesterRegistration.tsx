import React, { useMemo } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  FormInput,
  FromWrapper,
  FormSelect,
  FormDatePicker,
} from "../../../../components/form";
import { Button, Col, Flex } from "antd";
import { semesterStatusOptions } from "../../../../constants/global";
import { useGetAllAcademicSemesterQuery } from "../../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { SelectOptions } from "../../../../types";
import { useAddRegisteredSemesterMutation } from "../../../../redux/features/admin/courseManagement.api";

export const SemesterRegistration = () => {
  // api hooks
  const [addSemester, { isLoading }] = useAddRegisteredSemesterMutation();
  const { data: semesterData, isLoading: isSemesterLoading } =
    useGetAllAcademicSemesterQuery([]);
  const semesterOptions: SelectOptions = useMemo(
    () =>
      semesterData?.data?.map((semester) => ({
        value: semester._id,
        label: `${semester.name} ${semester.year}`,
      })) || [],
    [semesterData]
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering...");

    try {
      const bodyData = {
        ...data,
        minCredit: Number(data?.minCredit),
        maxCredit: Number(data?.maxCredit),
      };
      const res = await addSemester(bodyData).unwrap();
      toast.success("Semester Register", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FromWrapper onSubmit={onSubmit}>
          <FormSelect
            label="Academic Semester"
            name="academicSemester"
            options={semesterOptions}
            disabled={isSemesterLoading}
          />

          <FormSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <FormDatePicker name="startDate" label="Start Date" />
          <FormDatePicker name="endDate" label="End Date" />
          <FormInput type="text" name="minCredit" label="Min Credit" />
          <FormInput type="text" name="maxCredit" label="Max Credit" />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Col>
    </Flex>
  );
};

import { Button, Col, Flex } from "antd";
import React from "react";
import {
  FormInput,
  FormSelect,
  FromWrapper,
} from "../../../../components/form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import {
  useCreateCourseMutation,
  useGetCoursesQuery,
} from "../../../../redux/features/admin/courseManagement.api";
import { TPreRequisiteCourse } from "../../../../redux/features/admin/types";

export const CreateCourse = () => {
  // api hooks
  const { data: courses } = useGetCoursesQuery([]);
  const coursesOptions =
    courses?.data?.map((course) => {
      return {
        value: course?._id,
        label: course?.title,
      };
    }) || [];
  const [createCourse, { isLoading }] = useCreateCourseMutation();
  console.log(courses);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const bodyData = {
        ...data,
        code: Number(data?.code),
        credits: Number(data?.credits),
        isDeleted: false,
        preRequisiteCourses: data?.preRequisiteCourses
          ? data?.preRequisiteCourses.map((course: string) => {
              return {
                course: course,
                isDeleted: false,
              };
            })
          : [],
      };
      const res = await createCourse(bodyData).unwrap();
      toast.success("Semester created", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FromWrapper onSubmit={onSubmit}>
          <FormInput name="title" label="Title" type="text" />
          <FormInput name="prefix" label="Prefix" type="text" />
          <FormInput name="code" label="Code" type="text" />
          <FormInput name="credits" label="Credits" type="text" />

          <FormSelect
            name="preRequisiteCourses"
            label="Pre Requisite Courses"
            options={coursesOptions}
            mode="multiple"
          />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Col>
    </Flex>
  );
};

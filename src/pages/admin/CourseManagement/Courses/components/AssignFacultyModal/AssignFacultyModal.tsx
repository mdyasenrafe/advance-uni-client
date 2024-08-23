import React from "react";
import { useModal } from "../../../../../../hooks";
import { Modal } from "../../../../../../components";
import { Button } from "antd";
import { FormSelect, FromWrapper } from "../../../../../../components/form";
import { useGetAllFacultiesQuery } from "../../../../../../redux/features/admin/userManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAssignFacultiesMutation } from "../../../../../../redux/features/admin/courseManagement.api";

type AssignFacultyModalProps = {
  courseId: string;
};

export const AssignFacultyModal: React.FC<AssignFacultyModalProps> = ({
  courseId,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  // hooks
  const { data: courses } = useGetAllFacultiesQuery([]);
  const [assignFaculty] = useAssignFacultiesMutation();
  const facultyOptions =
    courses?.data?.map((course) => {
      return {
        value: course?._id,
        label: course?.fullName,
      };
    }) || [];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Assigning...");
    try {
      const args = {
        courseId,
        body: data,
      };
      const res = await assignFaculty(args).unwrap();
      toast.success("Assigned", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };

  return (
    <React.Fragment>
      <Button onClick={openModal}>Assign Faculty</Button>
      <Modal
        title="Assign Faculty"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      >
        <FromWrapper onSubmit={onSubmit}>
          <FormSelect
            name="faculties"
            label="Faculties"
            options={facultyOptions}
            mode="multiple"
          />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Modal>
    </React.Fragment>
  );
};

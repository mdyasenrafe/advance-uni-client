import React from "react";
import { useModal } from "../../../../../../hooks";
import { Modal } from "../../../../../../components";
import { Button } from "antd";
import { FormSelect, FromWrapper } from "../../../../../../components/form";
import { useGetAllFacultiesQuery } from "../../../../../../redux/features/admin/userManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type AssignFacultyModalProps = {
  courseId: string;
};

export const AssignFacultyModal: React.FC<AssignFacultyModalProps> = ({
  courseId,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { data: courses } = useGetAllFacultiesQuery([]);
  const facultyOptions =
    courses?.data?.map((course) => {
      return {
        value: course?._id,
        label: course?.fullName,
      };
    }) || [];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
  };

  return (
    <React.Fragment>
      <Button onClick={openModal}>Assign Faculty</Button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
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

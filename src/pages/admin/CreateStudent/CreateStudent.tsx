import React from "react";
import { FromWrapper } from "../../../components/form";
import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  AcademicInfoForm,
  ContactInfoForm,
  GurardinForm,
  LocalGurardinForm,
  PersonalInfoForm,
} from "./components";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";
import { toast } from "sonner";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Mr. Student2",
      middleName: "",
      lastName: "Good",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    email: "abcd@gmail.com",
    contactNo: "123567",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "66871866c2396621da97f7a5",
    academicDepartment: "656701a9adaebc55db21bde8",
    profileImg: "path/to/profile/image.jpg",
  },
};

const studentDefaultValues = {
  name: {
    firstName: "Mr. Student2",
    middleName: "Test",
    lastName: "Good",
  },
  gender: "male",
  email: "abcd+12@gmail.com",
  contactNo: "123567",
  emergencyContactNo: "987-654-3210",
  bloogGroup: "A+",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",
  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666",
  },
  localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton",
  },
  // admissionSemester: "66871866c2396621da97f7a5",
  academicDepartment: "",
  profileImg: "path/to/profile/image.jpg",
};

export const CreateStudent = () => {
  // api hooks
  const [addStudent, { isLoading }] = useAddStudentMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    try {
      const formData = new FormData();

      const studentData = {
        password: "student123",
        student: data,
      };
      formData.append("data", JSON.stringify(studentData));
      const res = await addStudent(formData).unwrap();
      toast.success("Student created", { id: toastId });
    } catch (err: any) {
      toast.error(err?.data?.message, { id: toastId });
    }
  };
  return (
    <Row>
      <Col span={24}>
        <FromWrapper
          onSubmit={handleSubmit}
          defaultValues={studentDefaultValues}
        >
          <PersonalInfoForm />
          <ContactInfoForm />
          <GurardinForm />
          <LocalGurardinForm />
          <AcademicInfoForm />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Col>
    </Row>
  );
};

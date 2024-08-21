import React from "react";
import { FormInput, FromWrapper } from "../../../components/form";
import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PersonalInfoForm } from "./components";

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

export const CreateStudent = () => {
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Row>
      <Col span={24}>
        <FromWrapper onSubmit={handleSubmit}>
          <PersonalInfoForm />
          <Button htmlType="submit">Submit</Button>
        </FromWrapper>
      </Col>
    </Row>
  );
};

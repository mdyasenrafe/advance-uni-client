import { Col, Divider, Row } from "antd";
import React from "react";
import { FormInput, FormSelect } from "../../../../../components/form";
import {
  bloodGroupOptions,
  genderOptions,
} from "../../../../../constants/global";

export const PersonalInfoForm = () => {
  return (
    <React.Fragment>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="name.firstName" label="First Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="name.middleName" label="Middle Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="name.lastName" label="Last Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormSelect options={genderOptions} name="gender" label="Gender" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="dateOfBirth" label="Date of Birth" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormSelect
            options={bloodGroupOptions}
            name="bloogGroup"
            label="Blood group"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

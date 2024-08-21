import { Col, Divider, Form, Input, Row } from "antd";
import React from "react";
import {
  FormDatePicker,
  FormInput,
  FormSelect,
} from "../../../../../components/form";
import {
  bloodGroupOptions,
  genderOptions,
} from "../../../../../constants/global";
import { Controller } from "react-hook-form";

export const PersonalInfoForm = () => {
  return (
    <React.Fragment>
      <Divider>Personal Info.</Divider>
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
          <FormDatePicker name="dateOfBirth" label="Date of Birth" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormSelect
            options={bloodGroupOptions}
            name="bloogGroup"
            label="Blood group"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Controller
            name="image"
            render={({ field: { onChange, value, ...field } }) => (
              <Form.Item label="Picture">
                <Input
                  type="file"
                  value={value?.fileName}
                  {...field}
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </Form.Item>
            )}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

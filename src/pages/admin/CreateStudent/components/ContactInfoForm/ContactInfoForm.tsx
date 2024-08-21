import { Col, Divider, Row } from "antd";
import React from "react";
import { FormInput } from "../../../../../components/form";

export const ContactInfoForm = () => {
  return (
    <React.Fragment>
      <Divider>Contact Info.</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="email" label="Email" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="contactNo" label="Contact" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="emergencyContactNo"
            label="Emergency Contact"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="presentAddress"
            label="Present Address"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="permanentAddress"
            label="Permanent Address"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

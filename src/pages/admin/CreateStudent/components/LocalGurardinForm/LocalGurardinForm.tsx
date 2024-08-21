import { Col, Divider, Row } from "antd";
import React from "react";
import { FormInput } from "../../../../../components/form";

export const LocalGurardinForm = () => {
  return (
    <React.Fragment>
      {" "}
      <Divider>Local Guardian</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="localGuardian.name" label="Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="localGuardian.occupation"
            label="Occupation"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="localGuardian.contactNo"
            label="Contact No."
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput type="text" name="localGuardian.address" label="Address" />
        </Col>
      </Row>
    </React.Fragment>
  );
};

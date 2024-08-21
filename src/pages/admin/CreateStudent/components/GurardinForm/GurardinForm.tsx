import { Col, Divider, Row } from "antd";
import React from "react";
import { FormInput } from "../../../../../components/form";

export const GurardinForm = () => {
  return (
    <React.Fragment>
      <Divider>Guardian</Divider>
      <Row gutter={8}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="guardian.fatherName"
            label="Father Name"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="guardian.fatherOccupation"
            label="Father Occupation"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="guardian.fatherContactNo"
            label="Father ContactNo"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="guardian.motherName"
            label="Mother Name"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="guardian.motherOccupation"
            label="Mother Occupation"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormInput
            type="text"
            name="guardian.motherContactNo"
            label="Mother ContactNo"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

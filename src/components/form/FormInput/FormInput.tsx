import { Form, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TFormInputProps = {
  type: string;
  name: string;
  label?: string;
};

export const FormInput: React.FC<TFormInputProps> = ({ type, name, label }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

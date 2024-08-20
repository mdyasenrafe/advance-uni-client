import { Form, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type FormSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
}) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select style={{ width: "100%" }} {...field} options={options} />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

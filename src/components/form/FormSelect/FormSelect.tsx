import { Form, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type FormSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
  disabled,
  mode,
}) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

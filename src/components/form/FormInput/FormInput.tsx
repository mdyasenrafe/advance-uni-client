import { Input } from "antd";
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
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

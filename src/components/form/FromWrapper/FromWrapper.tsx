import { Form } from "antd";
import React, { ReactNode } from "react";
import {
  Controller,
  FieldValue,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

export const FromWrapper: React.FC<TForm> = ({ onSubmit, children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

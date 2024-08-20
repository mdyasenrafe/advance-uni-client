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

type TFormConfig = {
  resolver?: any;
};

type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

export const FromWrapper: React.FC<TForm> = ({
  onSubmit,
  children,
  resolver,
}) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

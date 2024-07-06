import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { TUser, setUsers } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, Row } from "antd";
import { FormInput, FromWrapper } from "../../components/form";

type FormValues = {
  id: string;
  password: string;
};

export const Login = () => {
  // dispatch
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  // hooks
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const res = await login(data).unwrap();
      const token = res.data.accessToken as string;
      const user = verifyToken(token) as TUser;
      dispatch(setUsers({ user: user, token: token, duration: 2000 }));
      navigate(`/${user.role as string}/dashboard`);
      toast.success("Logged in", { id: toastId });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <FromWrapper onSubmit={onSubmit}>
        <FormInput type="text" name="id" label="User Id" />
        <FormInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </FromWrapper>
    </Row>
  );
};

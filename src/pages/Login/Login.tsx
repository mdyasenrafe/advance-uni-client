import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { log } from "console";
import { useAppDispatch } from "../../redux/hooks";
import { setUsers } from "../../redux/features/auth/authSlice";

type FormValues = {
  id: string;
  password: string;
};

export const Login = () => {
  // dispatch
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit(async (data) => {
    const res = await login(data).unwrap();
    dispatch(setUsers({ user: {}, token: res.data.accessToken as string }));
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Id: </label>
          <input placeholder="id" {...register("id")} />
        </div>
        <div>
          <label>Password: </label>
          <input placeholder="password" {...register("password")} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { log } from "console";
import { useAppDispatch } from "../../redux/hooks";
import { setUsers } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
  const onSubmit = handleSubmit(async (data) => {
    const toastId = toast.loading("Logging in");
    try {
      const res = await login(data).unwrap();
      const token = res.data.accessToken as string;
      const user: any = verifyToken(token);
      dispatch(setUsers({ user: user, token: token, duration: 2000 }));
      navigate(`/${user.role as string}/dashboard`);
      toast.success("Logged in", { id: toastId });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
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

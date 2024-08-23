import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../redux/store";
import { logout, setUsers } from "../redux/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://advance-uni-server.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    fetch("https://advance-uni-server.vercel.app/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data?.data?.accessToken) {
          const user = (api.getState() as RootState).auth.user;
          api.dispatch(setUsers({ user, token: data.data.accessToken }));
          let result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      });
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseapi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["semester", "course"],
  endpoints: () => ({}),
});

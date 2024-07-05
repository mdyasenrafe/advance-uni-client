import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://advance-uni-server.vercel.app/api/v1",
    credentials: "include",
  }),
  endpoints: () => ({}),
});

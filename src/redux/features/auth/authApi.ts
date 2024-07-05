import { baseApi } from "../../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        method: "POST",
        url: "/auth/login",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

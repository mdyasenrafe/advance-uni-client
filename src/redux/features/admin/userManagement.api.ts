import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => {
        return {
          url: "/user/create-student",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useAddStudentMutation } = userManagementApi;

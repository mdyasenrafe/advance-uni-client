import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => {
        return {
          url: "/users/create-student",
          method: "POST",
          body: data,
        };
      },
    }),
    getStudents: builder.query({
      query: () => {
        return {
          url: "/v1/students",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAddStudentMutation, useGetStudentsQuery } = userManagementApi;

import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../types";
import { TStudent } from "./types";

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
    getAllStudents: builder.query({
      query: () => {
        return {
          url: "/students",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useAddStudentMutation, useGetAllStudentsQuery } =
  userManagementApi;

import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../types";
import { TQueryParams, TStudent } from "./types";

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
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();
        if (args.length !== 0) {
          args.map((item) => params.append(item?.name, String(item.value)));
        }
        return {
          url: "/students",
          method: "GET",
          params: params,
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

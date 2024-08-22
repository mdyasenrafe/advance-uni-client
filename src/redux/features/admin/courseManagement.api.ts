import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../types";
import { TQueryParams, TSemester } from "./types";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegisteredSemesters: builder.query({
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (data) => {
        return {
          url: "/semester-registrations/create-semester-registration",
          method: "POST",
          body: data,
        };
      },
    }),
    updateSemesterRegister: builder.mutation({
      query: (data) => {
        return {
          url: `/semester-registrations/${data.id}`,
          method: "PATCH",
          body: data.body,
        };
      },
    }),
  }),
});

export const {
  useGetRegisteredSemestersQuery,
  useAddRegisteredSemesterMutation,
  useUpdateSemesterRegisterMutation,
} = courseManagementApi;

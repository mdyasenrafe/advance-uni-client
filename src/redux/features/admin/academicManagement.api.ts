import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../types";
import { TAcademicDepartment, TAcademicSemester, TQueryParams } from "./types";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();
        console.log(params);
        if (args) {
          args.forEach((element) => {
            params.append(element?.name, String(element?.value));
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAcademicDepartments: builder.query({
      query: () => {
        return { url: "/academic-departments", method: "GET" };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useGetAllAcademicSemesterQuery,
  useAddAcademicSemesterMutation,
  useGetAcademicDepartmentsQuery,
} = academicManagementApi;

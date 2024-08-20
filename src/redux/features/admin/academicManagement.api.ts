import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "./types";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
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
  }),
});

export const {
  useGetAllAcademicSemesterQuery,
  useAddAcademicSemesterMutation,
} = academicManagementApi;

import { baseApi } from "../../../api/baseApi";
import { TResponseRedux } from "../../../types";
import { TCourse, TQueryParams, TSemester } from "./types";

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
      providesTags: ["semester"],
    }),
    addRegisteredSemester: builder.mutation({
      query: (data) => {
        return {
          url: "/semester-registrations/create-semester-registration",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["semester"],
    }),
    updateSemesterRegister: builder.mutation({
      query: (data) => {
        return {
          url: `/semester-registrations/${data.id}`,
          method: "PATCH",
          body: data.body,
        };
      },
      invalidatesTags: ["semester"],
    }),
    getCourses: builder.query({
      query: (args: TQueryParams[]) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TCourse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["course"],
    }),
    createCourse: builder.mutation({
      query: (data) => {
        return {
          url: "/courses/create-course",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["course"],
    }),
    assignFaculties: builder.mutation({
      query: (args) => {
        return {
          url: `/courses/${args.courseId}/assign-faculties`,
          method: "PUT",
          body: args.body,
        };
      },
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useGetRegisteredSemestersQuery,
  useAddRegisteredSemesterMutation,
  useUpdateSemesterRegisterMutation,
  useGetCoursesQuery,
  useCreateCourseMutation,
  useAssignFacultiesMutation,
} = courseManagementApi;

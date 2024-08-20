import React from "react";
import { useGetAllAcademicSemesterQuery } from "../../../../redux/features/academicSemster/academicSemesterApi";

export const AcaemicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);
  return <div>AcaemicSemester</div>;
};

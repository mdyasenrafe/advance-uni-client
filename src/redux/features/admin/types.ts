import React from "react";

export type TAcademicSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};

export type TAcademicDepartment = {
  _id: string;
  name: string;
  academicFaculty: TAcademicFaculty;
  createdAt: string;
  updatedAt: string;
};

export interface TAcademicFaculty {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

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

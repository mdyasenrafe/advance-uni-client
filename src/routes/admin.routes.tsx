import React from "react";
import {
  CreateAdmin,
  CreateFaculty,
  CreateStudent,
  Dashboard,
} from "../pages/admin";
import { NavLink } from "react-router-dom";

type TAdminSideBar = {
  key: string;
  label: React.ReactNode;
  children?: TAdminSideBar[];
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

export const AdminSideBar = adminPaths.reduce((acc: TAdminSideBar[], item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.path,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => {
        return {
          key: child.path,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        };
      }),
    });
  }

  return acc;
}, []);

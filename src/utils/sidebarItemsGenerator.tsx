import { TAdminPath, TAdminSideBar } from "../types";
import { NavLink } from "react-router-dom";

export const sidebarItemsGenerator = (
  adminPaths: TAdminPath[],
  role: string
) => {
  return adminPaths.reduce((acc: TAdminSideBar[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item?.name || "",
        label: item?.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.path as string,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }
    console.log(acc);
    return acc;
  }, []);
};

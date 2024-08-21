export type TRoute = {
  path: string;
  element: React.ReactNode;
};

export type TAdminPath = {
  name: string;
  path: string;
  element?: React.ReactNode;
  children?: TAdminPath[];
};

export type TAdminSideBar =
  | {
      key: string;
      label: React.ReactNode;
      children?: TAdminSideBar[];
    }
  | undefined;

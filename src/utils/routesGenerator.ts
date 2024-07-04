type TRoute = {
  path: string;
  element: React.ReactNode;
};

type TAdminPath = {
  name: string;
  path?: string;
  element?: React.ReactNode;
  children?: TAdminPath[];
};

export const routesGenerator = (adminPaths: TAdminPath[]) => {
  return adminPaths.reduce((acc: TRoute[], item) => {
    if (item.name && item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path as string,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
};

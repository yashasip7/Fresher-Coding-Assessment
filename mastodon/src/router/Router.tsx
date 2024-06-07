import { RouteObject, useRoutes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

const getRoutes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [],
    },
  ];
};

export const Router = (): React.ReactElement | null => {
  const routes = getRoutes();

  return useRoutes(routes);
};

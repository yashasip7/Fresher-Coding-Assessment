import { RouteObject, useRoutes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { SignIn } from "../modules/sign-in/SignIn";
import { Home } from "../modules/home/Home";

const getRoutes = (): RouteObject[] => {
  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        }
      ],
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ];
};

export const Router = (): React.ReactElement | null => {
  const routes = getRoutes();

  return useRoutes(routes);
};

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { navigationRoutes } from "./routes";
import Layout from "../components/layouts/Layout/Layout";

const routes = navigationRoutes.map(
  ({ path, title, component: Component }) => ({
    path,
    element: title ? <Component title={title} /> : <Component />,
  })
);

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [...routes],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

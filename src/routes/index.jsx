import { BlogPage, HomePage } from "./elements";
import HomeLayout from "../layout/index";
import { useRoutes } from "react-router-dom";
import TripDetails from "../section/Home/TripDetails";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    {
      path: "/blogs",
      element: <HomeLayout />,
      children: [{ element: <BlogPage />, index: true }],
    },
    {
      path: "/trip-details",
      element: <HomeLayout />,
      children: [{ element: <TripDetails />, index: true }],
    },
  ]);
}

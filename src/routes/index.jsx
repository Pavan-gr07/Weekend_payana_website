import { BlogPage, HomePage } from "./elements";
import HomeLayout from "../layout/index";
import { useRoutes } from "react-router-dom";

import UpcomingTrips from "../pages/upcoming-trips/UpcomingTrips";
import { UpcomingTripDetails } from "../pages/upcoming-trips/UpcomingTripDetails";

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
      path: "/upcoming-trips",
      element: <HomeLayout />,
      children: [
        { element: <UpcomingTrips />, index: true },
        {
          path: 'details',
          element: <UpcomingTripDetails />,
        },
      ],
    },
  ]);
}

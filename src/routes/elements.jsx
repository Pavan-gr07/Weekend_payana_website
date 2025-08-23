import { Suspense, lazy } from "react";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-screen">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------
export const HomePage = Loadable(lazy(() => import("../pages/Home")));

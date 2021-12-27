import { Outlet, ReactLocation, Router } from "react-location";

import { LodableHomePage } from "./pages/Home";
import { E404 } from "./pages/404";
import { ProductResul } from "./pages/Home/ProductResult";

const location = new ReactLocation();

export function Routes() {
  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: <LodableHomePage />,
        },
        {
          path: "p",
          children: [
            { path: "/", element: () => <div /> },
            {
              path: ":productId",
              element: <ProductResul />,
            },
          ],
        },
        {
          element: <E404 />,
        },
      ]}>
      <Outlet />
    </Router>
  );
}

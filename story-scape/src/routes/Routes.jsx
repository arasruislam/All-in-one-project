import { createBrowserRouter } from "react-router-dom";
import Primary from "../layout/Primary";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Primary />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);

export default router;

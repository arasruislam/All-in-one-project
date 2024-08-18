import { createBrowserRouter } from "react-router-dom";
import Primary from "../layout/Primary";
import Home from "../pages/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Primary />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);

export default router;
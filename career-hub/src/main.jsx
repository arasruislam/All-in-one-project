import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Layout/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
         },

      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <>
      <RouterProvider router={router} />
   </>
);

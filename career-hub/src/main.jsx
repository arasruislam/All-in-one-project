import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Root from "./components/Root.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import AppliedJob from "./components/AppliedJob.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

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
         {
            path: "applied",
            element: <AppliedJob />,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <>
      <RouterProvider router={router} />
   </>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import Blogs from "./pages/Blogs.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/blogs",
            element: <Blogs />,
            loader: () =>
               fetch("https://dev.to/api/articles?per_page=20&top=7"),
         },
         {
            path: "/bookmarks",
            element: <Bookmarks />,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <>
      <RouterProvider router={router} />
   </>
);

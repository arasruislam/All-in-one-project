import { createBrowserRouter } from "react-router-dom";
import Primary from "../layout/Primary";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import BookDetails from "../components/Cards/BookDetails";

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
         {
            path: "/book_details/:id",
            element: <BookDetails />,
            loader: ({ params }) => fetch(`/books.json`),
         },
      ],
   },
]);

export default router;

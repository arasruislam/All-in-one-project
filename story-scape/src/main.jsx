import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./routes/Routes";
import "./index.css";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
   <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
   </>
);

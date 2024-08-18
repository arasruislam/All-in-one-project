import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./routes/Routes";
import "./index.css";

createRoot(document.getElementById("root")).render(
   <>
      <RouterProvider router={router} />
   </>
);

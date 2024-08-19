import React from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const Primary = () => {
   const {pathname} = useLocation();

   return (
      <div className="max-w-[2560px] mx-auto xl:px-16 md:px-8 sm:px-2 px-0">
         <Header />
         <div className="min-h-[calc(100vh-127px)]">
            <Outlet />
         </div>
         {pathname === "/page_to_read" ? "" : <Footer />}
      </div>
   );
};

export default Primary;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const MainLayout = () => {
   return (
      <>
         <div className="h-16">
            <Nav />
         </div>
         <div>
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default MainLayout;

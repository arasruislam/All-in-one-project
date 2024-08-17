import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

const MainLayout = () => {
   const navigation = useNavigation();

   return (
      <>
         <div className="h-16">
            <Nav />
         </div>
         <div className="min-h-[calc(100vh-116px)]">
            {navigation.state === "loading" ? <Loader /> : <Outlet />}
         </div>
         <Footer />
      </>
   );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../shared/Container";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Root = () => {
   return (
      <>
         <Header />
         <Container>
            <div className="min-h-[calc(100vh-273px)]">
               <Outlet />
            </div>
         </Container>
         <Footer />
      </>
   );
};

export default Root;

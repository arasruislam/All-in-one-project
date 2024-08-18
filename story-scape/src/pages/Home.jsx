import React from "react";
import Button from "../components/Shared/Button";
import Hero from "../components/Sections/Home/Hero";
import Books from "../components/Sections/Home/Books";

const Home = () => {
   return (
      <div>
         {/* Hero section */}
         <Hero />

         {/* Books */}
         <Books />
      </div>
   );
};

export default Home;

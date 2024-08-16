import React from "react";
import Hero from "../components/Hero";
import wave from "../assets/wave.svg"

const Home = () => {
   return (
      <div className="min-h-[calc(100vh-116px)] relative flex flex-col justify-center items-center">
         <Hero />

         <img src={wave} className="absolute bottom-0 w-full" alt="wave svg" />
      </div>
   );
};

export default Home;

import React from "react";
import bannerImg from "../../assets/banner.jpeg"

const Banner = () => {
   return (
      <div
         className=" hero h-[550px]  rounded-md overflow-hidden title_font"
         style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
         }}
      >
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-neutral-content text-center">
            <div className="w-auto px-4 lg:px-12 space-y-5">
               <h1 className="text-2xl lg:text-5xl font-bold">
                  Discover an exceptional cooking class tailored for you!
               </h1>
               <p>
                  Explore our collection of mouth-watering recipes from around
                  the world. Whether you're a seasoned chef or just starting in
                  the kitchen, we have something for everyone.
               </p>
               <div className="space-x-4">
                  <button className="btn bg-[#0BE58A] border-none rounded-full">
                     Explore Now
                  </button>
                  <button className="btn btn-outline rounded-full text-white">
                     Our Feedback
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;

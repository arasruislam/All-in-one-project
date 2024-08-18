import React from "react";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";
import book from "../../../assets/book_1.png";

const Hero = () => {
   return (
      <div className="w-full px-2 md:px-0 mt-6 py-8 bg-gray-200 rounded-lg ">
         <div className="w-11/12 mx-auto grid gird-cols-1 lg:grid-cols-2 place-items-center">
            <div>
               <h1 className="text-6xl mb-12 font-bold">
                  Books to freshen up your bookshelf
               </h1>
               <Button primary={true}>
                  <Link>View The List</Link>
               </Button>
            </div>
            <div>
               <img src={book} alt="book image" />
            </div>
         </div>
      </div>
   );
};

export default Hero;

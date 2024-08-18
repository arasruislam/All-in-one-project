import React from "react";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";
import book from "../../../assets/book_1.png";

const Hero = () => {
   return (
      <div className="w-full px-2 md:px-0 mt-6 py-8 bg-gray-200 rounded-lg ">
         <div className="w-11/12 mx-auto grid gird-cols-1 lg:grid-cols-2 place-items-center">
            <div className="order-2 lg:order-1">
               <h1 className="text-4xl md:text-6xl mb-8 lg:mb-12 font-bold mt-4 lg:mt-0">
                  Books to freshen up your bookshelf
               </h1>
               <Button primary={true}>
                  <Link to="/listed_book">View The List</Link>
               </Button>
            </div>
            <div className="order-1 lg:order-2">
               <img src={book} alt="book image" />
            </div>
         </div>
      </div>
   );
};

export default Hero;

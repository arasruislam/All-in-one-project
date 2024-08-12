import React from "react";
import recipeImg from "../../assets/recipe_1.png";
import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimple } from "react-icons/pi";


const Recipe = () => {
   return (
      <>
         <div className="p-6 space-y-6 border rounded-lg">
            <div>
               <img src={recipeImg} alt="" />
            </div>
            <div>
               <h3 className="title_font mb-2">Recipe Name</h3>
               <p className="base_font font-light text-gray-600">
                  short description
               </p>
            </div>
            <hr />
            <div>
               <h4 className="title_font mb-2">Ingredients: 6</h4>
               <p className="base_font font-light text-gray-600">items</p>
            </div>
            <hr />

            <div className="flex justify-between items-center">
               <p className="flex items-center gap-2 base_font font-light text-gray-600">
                  <IoTimeOutline />
                  <span>Time</span>
               </p>
               <p className="flex items-center gap-2 base_font font-light text-gray-600">
                  <PiFireSimple />
                  <span>calories</span>
               </p>
            </div>

            <button className="btn title_font bg-[#0BE58A] border-none rounded-full">
               Want to Cook
            </button>
         </div>
      </>
   );
};

export default Recipe;

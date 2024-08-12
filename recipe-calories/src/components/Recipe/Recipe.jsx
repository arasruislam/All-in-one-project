import React from "react";
import recipeImg from "../../assets/recipe_1.png";
import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimple } from "react-icons/pi";

const Recipe = ({ recipe, handleWantToCook }) => {
   const { id, image, name, description, ingredients, time, calories } = recipe;
   return (
      <>
         <div className="p-6 space-y-6 border rounded-lg">
            <div>
               <img src={image} alt="recipe image" />
            </div>
            <div>
               <h3 className="title_font mb-2">{name}</h3>
               <p className="base_font font-light text-gray-600">
                  {description}
               </p>
            </div>
            <hr />
            <div>
               <h4 className="title_font mb-2">
                  Ingredients: {ingredients.length}
               </h4>
               <p className="base_font font-light text-gray-600">
                  {ingredients.map((ingredient, i) => (
                     <li key={i}>{ingredient}</li>
                  ))}
               </p>
            </div>
            <hr />

            <div className="flex justify-between items-center">
               <p className="flex items-center gap-2 base_font font-light text-gray-600">
                  <IoTimeOutline />
                  <span>{time}</span>
               </p>
               <p className="flex items-center gap-2 base_font font-light text-gray-600">
                  <PiFireSimple />
                  <span>{calories}</span>
               </p>
            </div>

            <button
               onClick={() => handleWantToCook(recipe)}
               className="btn title_font bg-[#0BE58A] border-none rounded-full"
            >
               Want to Cook
            </button>
         </div>
      </>
   );
};

export default Recipe;

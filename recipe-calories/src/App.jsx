import { useEffect, useState } from "react";
import Banner from "./components/Header/Banner";
import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";
import Recipe_Cart from "./components/Recipe/Recipe_Cart";
import toast from "react-hot-toast";

function App() {
   const [recipes, setRecipes] = useState([]);
   const [wantToCook, setWantToCook] = useState([]);
   const [cookingRecipes, setCookingRecipes] = useState([]);

   useEffect(() => {
      fetch("./recipes.json")
         .then((res) => res.json())
         .then((data) => setRecipes(data));
   }, []);

   // handle want to cook recipes
   const handleWantToCook = (recipe) => {
      const isExits = wantToCook.find((cooked) => cooked.id === recipe.id);

      if (!isExits) {
         setWantToCook([...wantToCook, recipe]);
         toast.success("Recipe Added");
      } else {
         toast.error("Recipe Already Exit!");
      }
   };

   // handle cooking recipes
   const handleCookingRecipe = (recipe) => {
      const remainingWantToCookRecipes = wantToCook.filter(
         (cooked) => cooked.id !== recipe.id
      );

      setWantToCook(remainingWantToCookRecipes);
      setCookingRecipes([...cookingRecipes, recipe]);
      toast.success("add recipe for preparing");
   };

   return (
      <div className="w-11/12 mx-auto">
         {/* nav bar */}
         <Header />
         {/* banner */}
         <Banner />
         {/* recipe & cart */}
         <div className="mt-8 mb-4">
            <div className="text-center w-full lg:w-2/3 mx-auto title_font">
               <h2 className="text-3xl mb-2 font-bold">Our Recipes</h2>
               <p className="text-gray-400 font-light">
                  Dive into our curated collection of recipes that cater to
                  every palate. Whether you're looking for quick meals, gourmet
                  delights, or something in between, we have the perfect recipe
                  for every occasion.
               </p>
            </div>
            {/* recipes */}
            <div className="flex flex-col lg:flex-row gap-4 mt-8">
               <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recipes.map((recipe) => (
                     <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        handleWantToCook={handleWantToCook}
                     />
                  ))}
               </div>
               {/* cart */}
               <div className="w-full lg:w-2/5">
                  <Recipe_Cart
                     wantToCook={wantToCook}
                     handleCookingRecipe={handleCookingRecipe}
                     cookingRecipes={cookingRecipes}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;

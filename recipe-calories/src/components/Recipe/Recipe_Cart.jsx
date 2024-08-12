import React from "react";

const Recipe_Cart = ({ wantToCook, handleCookingRecipe, cookingRecipes }) => {
   return (
      <>
         <div className="p-6 space-y-6 border rounded-lg">
            {/* want to cook table */}
            <div>
               <h2 className="font-bold title_font text-center text-xl">
                  Want to cook: {wantToCook.length}
               </h2>
               <hr className="my-4" />

               {/* table to who cook items */}
               {wantToCook.length !== 0 ? (
                  <div className="overflow-x-auto">
                     <table className="table table-xs">
                        {/* head */}
                        <thead>
                           <tr>
                              <th>No.</th>
                              <th>Name</th>
                              <th>Time</th>
                              <th>Calories</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {/* row 1 */}
                           {wantToCook.map((recipe, i) => (
                              <tr key={i}>
                                 <th>{i + 1}</th>
                                 <td>{recipe?.name}</td>
                                 <td>{recipe?.time}</td>
                                 <td>{recipe?.calories}</td>
                                 <td>
                                    <button
                                       onClick={() =>
                                          handleCookingRecipe(recipe)
                                       }
                                       className="bg-[#0BE58A] px-2 py-1 rounded-full hover:bg-green-500 transition-all"
                                    >
                                       Preparing
                                    </button>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <p className="text-gray-600">No item want to cook</p>
               )}
            </div>
            {/* Currently cooking table */}
            <div>
               <h2 className="font-bold title_font text-center text-xl">
                  Currently cooking: {cookingRecipes.length}
               </h2>
               <hr className="my-4" />

               <div className="overflow-x-auto">
                  {cookingRecipes.length !== 0 ? (
                     <table className="table table-xs">
                        {/* head */}
                        <thead>
                           <tr>
                              <th>No.</th>
                              <th>Name</th>
                              <th>Time</th>
                              <th>Calories</th>
                           </tr>
                        </thead>
                        <tbody>
                           {/* row 1 */}
                           {cookingRecipes.map((recipe, i) => (
                              <tr key={i}>
                                 <th>{i + 1}</th>
                                 <td>{recipe?.name}</td>
                                 <td>{recipe?.time}</td>
                                 <td>{recipe?.calories}</td>
                              </tr>
                           ))}

                           <tr>
                              <th></th>
                              <td></td>
                              <td>Total Time: </td>
                              <td>Total Calories: </td>
                           </tr>
                        </tbody>
                     </table>
                  ) : (
                     <p>No item cooking right now...</p>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default Recipe_Cart;

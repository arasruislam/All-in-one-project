import React from "react";

const Recipe_Cart = () => {
   return (
      <>
         <div className="p-6 space-y-6 border rounded-lg">
            {/* want to cook table */}
            <div>
               <h2 className="font-bold title_font text-center text-xl">
                  Want to cook: 01
               </h2>
               <hr className="my-4" />

               {/* table to who cook items */}
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
                        <tr>
                           <th>1</th>
                           <td>Cy Ganderton</td>
                           <td>Quality Control Specialist</td>
                           <td>Blue</td>
                           <td>
                              <button className="bg-[#0BE58A] px-2 py-1 rounded-full hover:bg-green-500 transition-all">
                                 Preparing
                              </button>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
            {/* Currently cooking table */}
            <div>
               <h2 className="font-bold title_font text-center text-xl">
                  Currently cooking: 02
               </h2>
               <hr className="my-4" />

               <div className="overflow-x-auto">
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
                        <tr>
                           <th>1</th>
                           <td>Cy Ganderton</td>
                           <td>Quality Control Specialist</td>
                           <td>Blue</td>
                        </tr>
                        <tr>
                           <th></th>
                           <td></td>
                           <td>Total Time: </td>
                           <td>Total Calories: </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   );
};

export default Recipe_Cart;

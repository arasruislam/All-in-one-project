import demo from "../../../assets/book_1.png";
import { FaRegStar } from "react-icons/fa";

const Books = () => {
   return (
      <div className="my-12">
         <h2 className="text-3xl text-center text-bold mb-6">Books</h2>

         {/* Books card */}
         <div>
            <div className="card w-96 border p-6">
               {/* card image */}
               <div className="py-6 rounded-lg grid place-items-center bg-gray-200">
                  <img
                     src={demo}
                     style={{ width: 134, height: 166 }}
                     alt="Shoes"
                     className="rounded-xl"
                  />
               </div>
               <div className="card-body px-0 pb-0">
                  {/* tags */}
                  <div className="flex gap-2">
                     <span className="bg-[#23BE0A] bg-opacity-10 py-1 px-2 rounded-full asru_primary">
                        Young Adult
                     </span>
                     <span className="bg-[#23BE0A] bg-opacity-10 py-1 px-2 rounded-full asru_primary">
                        Identity
                     </span>
                  </div>
                  {/* title */}
                  <h2 className="card-title mt-2 text-gray-700">
                     The Catcher in the Rye
                  </h2>
                  {/* Author */}
                  <p>By: Asru Islam</p>

                  {/* rating */}
                  <div className="flex justify-between border-dashed border-t-2 mt-auto pt-2">
                     <span>Fiction</span>
                     <span className="flex items-center gap-1">
                        5.00 <FaRegStar />
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Books;

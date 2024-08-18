import demo from "../../assets/book_1.png";
import { FaRegStar } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
   return (
      <Link to={`/book_details/${book.bookId}`}>
         <div className="card w-full md:w-96 border p-6">
            {/* card image */}
            <div className="py-6 rounded-lg grid place-items-center bg-gray-200">
               <LazyLoad once={true}>
                  <img
                     src={book?.image || demo}
                     style={{ width: 134, height: 166 }}
                     alt="Shoes"
                     className="rounded-xl"
                  />
               </LazyLoad>
            </div>
            <div className="card-body px-0 pb-0">
               {/* tags */}
               <div className="flex gap-2">
                  {book?.tags.map((tag) => (
                     <span className="bg-[#23BE0A] bg-opacity-10 py-1 px-2 rounded-full asru_primary">
                        {tag}
                     </span>
                  ))}
               </div>
               {/* title */}
               <h2 className="card-title mt-2 text-gray-700">
                  {book?.bookName}
               </h2>
               {/* Author */}
               <p>By: {book?.author}</p>

               {/* rating */}
               <div className="flex justify-between border-dashed border-t-2 mt-auto pt-2">
                  <span>Fiction</span>
                  <span className="flex items-center gap-1">
                     {book?.rating} <FaRegStar />
                  </span>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default Book;

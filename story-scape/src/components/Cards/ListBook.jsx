import { FaRegStar } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { PiNotebookThin } from "react-icons/pi";
import Button from "../Shared/Button";

const ListBook = ({ book }) => {
   return (
      <Link to={`/book_details/${book.bookId}`}>
         <div className="card md:flex-row gap-8 border p-6 mb-4">
            {/* card image */}
            <div className="p-8 rounded-lg grid place-items-center bg-gray-200">
               <LazyLoad once={true}>
                  <img
                     src={book?.image}
                     style={{ width: 134, height: 166 }}
                     alt="Shoes"
                     className="rounded-xl"
                  />
               </LazyLoad>
            </div>
            <div className="flex-grow self-start card-body space-y-1 p-0 pb-0">
               {/* title */}
               <h2 className="text-2xl font-bold text-gray-700">
                  {book?.bookName}
               </h2>
               {/* Author */}
               <p>By: {book?.author}</p>

               {/* tags & publish year */}
               <div className="flex gap-12 items-center flex-wrap">
                  <div className="flex items-center gap-2">
                     <strong>tags: </strong>
                     {book?.tags.map((tag, i) => (
                        <span
                           key={i}
                           className="bg-[#23BE0A] bg-opacity-10 py-1 px-2 rounded-full asru_primary"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>
                  <div className="flex items-center gap-2">
                     <LuMapPin /> Year of Publishing: {book?.yearOfPublishing}
                  </div>
               </div>

               <div className="flex gap-12 items-center flex-wrap">
                  <div className="flex items-center gap-2">
                     <FiUsers /> <span>Publisher: {book.publisher}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <PiNotebookThin />
                     <span>Publisher: {book.totalPages}</span>
                  </div>
               </div>

               {/* rating */}
               <div className="flex items-center gap-4 border-dashed border-t-2 mt-auto pt-4 flex-wrap">
                  <div className="flex items-center gap-1 px-4 py-3 rounded-full bg-blue-200 bg-opacity-20 text-blue-500">
                     rating: {book?.category}
                  </div>
                  <div className="flex items-center gap-1 px-4 py-3 rounded-full bg-yellow-200 bg-opacity-20 text-yellow-500">
                     rating: {book?.rating} <FaRegStar />
                  </div>
                  <Button primary={true} round={true}>View Details</Button>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default ListBook;

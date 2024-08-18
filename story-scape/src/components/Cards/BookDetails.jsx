import React from "react";
import { useLoaderData,useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Button from "../Shared/Button";

const BookDetails = () => {
   const book = useLoaderData();
   const params = useParams();

   const detailsBook = book.find((book) => book.bookId === params.id);

   return (
      <div className="min-h-[calc(100vh-127px)] flex items-center">
         <div className="card flex-col lg:flex-row px-2 lg:px-0 card-side gap-4 flex-1 py-4">
            {/* book image */}
            <div className="rounded-lg p-8 bg-gray-200 shadow">
               <LazyLoad once={true}>
                  <img
                     src={detailsBook.image}
                     alt="Movie"
                     className="w-96 h-[464px]"
                     // style={{ width: 425, height: 564 }}
                  />
               </LazyLoad>
            </div>

            {/* Book details */}
            <div className="card-body flex-1">
               <h2 className="text-4xl">{detailsBook.bookName}</h2>
               <p>By: {detailsBook?.author}</p>

               {/* part 2 */}
               <p className="border-b border-t py-4">Fiction</p>
               {/* review and tags */}
               <div className="border-b pb-4 space-y-2">
                  <p className="text-justify">
                     <strong>Review:</strong> {detailsBook.review}
                  </p>
                  <div className="flex gap-2">
                     <strong>tags: </strong>
                     {detailsBook?.tags.map((tag) => (
                        <span className="bg-[#23BE0A] bg-opacity-10 py-1 px-2 rounded-full asru_primary">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>

               {/* others details */}
               <div className="space-y-4">
                  <p className="flex">
                     <span className="flex-1">Number of Pages: </span>{" "}
                     <span className="flex-1">{detailsBook?.totalPages}</span>
                  </p>
                  <p className="flex">
                     <span className="flex-1">Publisher: </span>{" "}
                     <span className="flex-1">{detailsBook?.publisher}</span>
                  </p>
                  <p className="flex">
                     <span className="flex-1">Year of Publishing: </span>
                     <span className="flex-1">
                        {detailsBook?.yearOfPublishing}
                     </span>
                  </p>
                  <p className="flex">
                     <span className="flex-1">Rating: </span>
                     <span className="flex-1">{detailsBook?.rating}</span>
                  </p>
               </div>

               {/* buttons */}
               <div className="flex gap-4 mt-4">
                  <Button primaryOutline={true}>Read</Button>
                  <Button secondary={true}>Wishlist</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookDetails;

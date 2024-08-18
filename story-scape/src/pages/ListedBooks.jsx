import React, { useEffect, useState } from "react";
import Button from "../components/Shared/Button";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import ListBook from "../components/Cards/ListBook";
import { getReadList, getWishlist } from "../utils/main";

const ListedBooks = () => {
   const [tabIndex, setTabIndex] = useState(0);
   const [readList, setReadList] = useState([]);
   const [wishlist, setWishlist] = useState([]);

   useEffect(() => {
      const readBooks = getReadList();
      setReadList(readBooks);
   }, []);

   useEffect(() => {
      const wishlistBook = getWishlist();
      setWishlist(wishlistBook);
   }, []);

   return (
      <>
         <div className="flex flex-col justify-center items-center my-6">
            <div className="w-full grid justify-center font-bold text-xl py-4 bg-gray-200 rounded-lg mb-4">
               Books
            </div>
            {/* sort by */}
            <div className="dropdown">
               <Button
                  tabIndex={0}
                  primary={true}
                  className="flex items-center"
               >
                  Sort By <IoIosArrowDown size={20} />
               </Button>
               <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
               >
                  <li>
                     <a>Rating</a>
                  </li>
                  <li>
                     <a>Number of pages</a>
                  </li>
                  <li>
                     <a>Published year</a>
                  </li>
               </ul>
            </div>
         </div>

         {/* tabs */}
         <div>
            <div className="flex items-center pt-12 overflow-x-auto overflow-y-hidden  flex-nowrap">
               <Link
                  // to=""
                  onClick={() => setTabIndex(0)}
                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
                     tabIndex === 0 ? "border border-b-0" : "border-b"
                  } border-gray-400 `}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="w-4 h-4"
                  >
                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Read Books</span>
               </Link>
               <Link
                  // to=""
                  onClick={() => setTabIndex(1)}
                  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                     tabIndex === 1 ? "border border-b-0" : "border-b"
                  } rounded-t-lg border-gray-400`}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="w-4 h-4"
                  >
                     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span>Wishlist Books</span>
               </Link>
            </div>

            {/* read books & wishlist book */}
            {tabIndex === 0 &&
               <div className="mt-6 mx-auto px-2 md:px-0 w-full md:w-4/5">
               {readList.map((book) => (
                  <ListBook key={book.bookId} book={book} />
               ))}
            </div>}
         </div>
      </>
   );
};

export default ListedBooks;

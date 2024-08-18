import { toast } from "react-hot-toast";

// get read list
export const getReadList = () => {
   let readList = [];
   const storedReadList = localStorage.getItem("readList");

   if (storedReadList) {
      readList = JSON.parse(storedReadList);
   }

   return readList;
};

// get wishlist
export const getWishlist = () => {
   let wishlist = [];
   const storedWishlist = localStorage.getItem("wishlist");

   if (storedWishlist) {
      wishlist = JSON.parse(storedWishlist);
   }

   return wishlist;
};

// save read list
export const saveReadList = (book) => {
   let readList = getReadList();
   const isExit = readList.find((bk) => bk.bookId === book.bookId);

   if (isExit) {
      return toast.error("Book already read this book.");
   }

   readList.push(book);
   localStorage.setItem("readList", JSON.stringify(readList));
   toast.success("Book added successfully.");
};

// save read list
export const saveWishlist = (book) => {
   let wishlist = getWishlist();
   let readList = getReadList();
   const isExitWishlist = wishlist.find((bk) => bk.bookId === book.bookId);
   const isExitReadList = readList.find((bk) => bk.bookId === book.bookId);

   if (isExitReadList) {
      return toast.error("Already exits in read list.");
   }

   if (isExitWishlist) {
      return toast.error("Already exits in wishlist.");
   }

   wishlist.push(book);
   localStorage.setItem("wishlist", JSON.stringify(wishlist));
   toast.success("Book added into the wishlist.");
};

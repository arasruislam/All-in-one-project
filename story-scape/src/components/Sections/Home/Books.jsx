import Book from "../../Cards/Book";

const Books = ({ books }) => {
   return (
      <div className="my-12">
         <h2 className="text-3xl text-center text-bold mb-6">Books</h2>

         {/* Books card */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
            {books.map((book) => (
               <Book key={book.bookId} book={book} />
            ))}
         </div>
      </div>
   );
};

export default Books;

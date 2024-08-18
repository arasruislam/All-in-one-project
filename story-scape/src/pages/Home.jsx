import React, { useEffect, useState } from "react";
import Hero from "../components/Sections/Home/Hero";
import Books from "../components/Sections/Home/Books";
import axios from "axios";
import { toast } from "react-hot-toast";

const Home = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      const booksData = async () => {
         try {
            const response = await axios.get("/books.json");
            setBooks(response.data);
         } catch (error) {
            toast.error(error);
         }
      };

      booksData();
   }, []);

   return (
      <div>
         {/* Hero section */}
         <Hero />

         {/* Books */}
         <Books books={books} />
      </div>
   );
};

export default Home;

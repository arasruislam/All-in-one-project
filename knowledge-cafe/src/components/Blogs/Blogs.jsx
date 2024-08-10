import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
   const [blogs, setBlgos] = useState([]);

   useEffect(() => {
      fetch("blogs.json")
         .then((res) => res.json())
         .then((data) => setBlgos(data));
   }, []);

   return (
      <div className="md:w-2/3">
           blogs: {blogs.length}
           
           {/* single blog */}
           {
               blogs.map((blog) => (
                <Blog blog={blog} key={blog.id}></Blog>
               ))
           }
      </div>
   );
};

export default Blogs;

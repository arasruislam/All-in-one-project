import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleTime }) => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch("blogs.json")
         .then((res) => res.json())
         .then((data) => setBlogs(data));
   }, []);

   return (
      <div className="md:w-2/3">
         {/* single blog */}
         {blogs.map((blog) => (
            <Blog
               blog={blog}
               key={blog.id}
               handleAddToBookmark={handleAddToBookmark}
               handleTime={handleTime}
            ></Blog>
         ))}
      </div>
   );
};

Blogs.propTypes = {
   handleAddToBookmark: PropTypes.func,
   handleTime: PropTypes.func
};

export default Blogs;

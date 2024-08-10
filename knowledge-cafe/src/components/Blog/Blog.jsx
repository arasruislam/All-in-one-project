import PropTypes from "prop-types";
const Blog = ({ blog }) => {
   //    const { hashtags } = blog;
   return (
      <div className="mt-4 space-y-2">
         <img src={blog?.cover} className="rounded-md" alt="" />
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
               <img className="w-14" src={blog?.author_img} alt="" />
               <div>
                  <h3 className="text-xl font-bold">{blog?.author}</h3>
                  <p className="text-gray-500">{blog?.posted_date}</p>
               </div>
            </div>
            <div>
               <p className="text-gray-500">{blog?.reading_time}</p>
            </div>
         </div>
         <h1 className="text-4xl font-bold">{blog?.title}</h1>
         {/* tags */}
         <p className="space-x-4">
            {blog?.hashtags.map((hash, i) => (
               <span key={i}>
                  <a className="text-gray-500" href="">
                     {hash}
                  </a>
               </span>
            ))}
         </p>
         {/* button */}
         <button className="text-purple-600 underline">Mark as read</button>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
};

export default Blog;

import toast from "react-hot-toast";

// get blogs from local storage
export const getBlogs = () => {
   let blogs = [];
   const storedBlogs = localStorage.getItem("blogs");

   if (storedBlogs) {
      blogs = JSON.parse(storedBlogs);
   }

   return blogs;
};

// save blog into the local storage
export const saveBlogs = (blog) => {
   let blogs = getBlogs();
   const isExit = blogs.find((b) => b.id === blog.id);

   if (isExit) {
      return toast.error("Already Bookmarked");
   }

   blogs.push(blog);
   localStorage.setItem("blogs", JSON.stringify(blogs));
   toast.success("Blog bookmarked successfully.");
};

// delete blog
export const deleteBlog = (blog) => {
   let blogs = getBlogs();
   const remaining = blogs.filter((b) => b.id !== blog.id);
   localStorage.setItem("blogs", JSON.stringify(remaining));
   toast.success("Blog removed from bookmarked");
};

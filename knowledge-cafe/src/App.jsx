import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
   const [bookmark, setBookmark] = useState([]);
   const [readingTime, setReadingTime] = useState(0);

   const handleTime = (id, time) => {
      const newTime = readingTime + time;
      setReadingTime(newTime);

      const remainingBookmark = bookmark.filter((item) => item.id !== id);
      setBookmark(remainingBookmark);
   };

   const handleAddToBookmark = (blog) => {
      const newBookmarks = [...bookmark, blog];
      setBookmark(newBookmarks);
   };
   return (
      <div className=" w-5/6 mx-auto">
         <Header />

         <div className="md:flex gap-4">
            <Blogs
               handleTime={handleTime}
               handleAddToBookmark={handleAddToBookmark}
            />
            <Bookmarks readingTime={readingTime} bookmark={bookmark} />
         </div>
      </div>
   );
}

export default App;

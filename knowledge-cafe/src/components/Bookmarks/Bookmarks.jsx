import { PropTypes } from "prop-types";

const Bookmarks = ({ bookmark, readingTime }) => {
   return (
      <div className="md:w-1/3">
         <div className="bg-purple-100 px-2 py-4 rounded-md border-2 border-purple-400">
            Time Spend on read: {readingTime}
         </div>
         <div className="bg-gray-300 p-2 h-auto mt-4 rounded-md">
            <h2 className="font-bold text-2xl">bookmarks: {bookmark.length}</h2>
            <div className="mt-2 space-y-2">
               {bookmark.map((item, i) => (
                  <h1 className="text-xl p-2 bg-white rounded-md" key={i}>
                     {item.title}
                  </h1>
               ))}
            </div>
         </div>
      </div>
   );
};

Bookmarks.propTypes = {
   bookmark: PropTypes.array,
   readingTime: PropTypes.number,
};

export default Bookmarks;

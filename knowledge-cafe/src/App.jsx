import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
   return (
      <div className=" w-5/6 mx-auto">
         <Header />

         <div className="md:flex gap-4">
            <Blogs />
            <Bookmarks />
         </div>
      </div>
   );
}

export default App;

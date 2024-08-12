import Banner from "./components/Header/Banner";
import Header from "./components/Header/Header";

function App() {
   return (
      <div className="w-11/12 mx-auto">
         {/* nav bar */}
         <Header />
         {/* banner */}
         <Banner />
      </div>
   );
}

export default App;

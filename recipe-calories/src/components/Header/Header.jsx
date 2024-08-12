import React from "react";

const Header = () => {
   // nav items
   const navItem = (
      <>
         <li>
            <a>Home</a>
         </li>
         <li>
            <a>Recipes</a>
         </li>
         <li>
            <a>About</a>
         </li>
         <li>
            <a>Search</a>
         </li>
      </>
   );

   return (
      <nav className="title_font">
         <div className="navbar px-0 bg-base-100">
            <div className="navbar-start">
               <a className="text-xl lg:text-3xl font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">{navItem}</ul>
            </div>
            <div className="navbar-end">
               <div className="form-control mr-2 hidden lg:flex">
                  <input
                     type="text"
                     placeholder="Search..."
                     className="input input-bordered input-sm rounded-full w-24 md:w-auto"
                  />
               </div>
               <div className="dropdown dropdown-end">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost btn-circle avatar"
                  >
                     <div className="w-10 rounded-full">
                        <img
                           alt="Tailwind CSS Navbar component"
                           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                     </div>
                  </div>
                  <ul
                     tabIndex={0}
                     className="block lg:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                     {navItem}

                     <div className="form-control mt-2">
                        <input
                           type="text"
                           placeholder="Search..."
                           className="input input-bordered rounded-full w-24 md:w-auto"
                        />
                     </div>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Header;

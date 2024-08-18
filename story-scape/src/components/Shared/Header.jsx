import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   const navItems = (
      <>
         <li>
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#23BE0A] asru_primary font-bold transition-color hover:bg-[#23BE0A] hover:text-white"
                     : "hover:border-2"
               }
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/listed_book"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#23BE0A] asru_primary font-bold transition-color hover:bg-[#23BE0A] hover:text-white"
                     : ""
               }
            >
               Listed Books
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/page_to_read"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#23BE0A] asru_primary font-bold transition-color hover:bg-[#23BE0A] hover:text-white"
                     : ""
               }
            >
               Page to Read
            </NavLink>
         </li>
         <li>
            <NavLink
               to="unknown"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#23BE0A] asru_primary font-bold transition-color hover:bg-[#23BE0A] hover:text-white"
                     : ""
               }
            >
               Unknown
            </NavLink>
         </li>
         <li>
            <NavLink
               to="unknown2"
               className={({ isActive }) =>
                  isActive
                     ? "border border-[#23BE0A] asru_primary font-bold transition-color hover:bg-[#23BE0A] hover:text-white"
                     : ""
               }
            >
               Unknown
            </NavLink>
         </li>
      </>
   );
   return (
      <div className="navbar bg-[#23BE0A] bg-opacity-10 md:px-4 rounded shadow-md">
         <div className="md:navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-[#23BE0A] bg-opacity-30 mr-2 lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {navItems}

                  {/* Button sign in/sing up */}
                  <div className="navbar-end mt-4 w-full space-y-2  md:hidden">
                     <a className="btn bg-[#23BE0A] hover:bg-[#1da208]  border-none text-white w-full">
                        Sign In
                     </a>
                     <a className="btn bg-[#50B1C9] hover:bg-[#3897af] border-none text-white w-full">
                        Sign Up
                     </a>
                  </div>
               </ul>
            </div>
            <a className="text-2xl font-extrabold">Story Scape</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  space-x-2">{navItems}</ul>
         </div>
         {/* Button sign in/sing up */}
         <div className="navbar-end space-x-2 hidden md:flex">
            <a className="btn bg-[#23BE0A] hover:bg-[#1da208]  border-none text-white">
               Sign In
            </a>
            <a className="btn bg-[#50B1C9] hover:bg-[#3897af] border-none text-white">
               Sign Up
            </a>
         </div>
      </div>
   );
};

export default Header;

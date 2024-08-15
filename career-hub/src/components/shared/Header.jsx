import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const Header = () => {
   const navLinks = (
      <>
         <li>
            <NavLink to="/statistic">Statistic</NavLink>
         </li>
         <li>
            <NavLink to="applied">Applied Jobs</NavLink>
         </li>
         <li>
            <NavLink to="blog">Blog</NavLink>
         </li>
      </>
   );
   return (
      <Container>
         <div className="navbar p-0">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
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
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
                  >
                     {navLinks}
                  </ul>
               </div>
               <a className="text-3xl font-bold">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal space-x-4 px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Button</a>
            </div>
         </div>
      </Container>
   );
};

export default Header;

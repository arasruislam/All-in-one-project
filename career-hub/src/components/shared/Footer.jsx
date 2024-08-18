import React from "react";
import Container from "./Container";

const Footer = () => {
   return (
      <footer className="bg-neutral text-neutral-content py-12">
         <Container>
            <div className="footer grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start pb-4">
               <aside>
                  <h1 className="text-4xl font-bold">CareerHub</h1>
                  <p>
                     There are many variations of passages of Lorem Ipsum , but
                     the majority have suffered alteration in some form.
                  </p>
                  <ul className="flex gap-4">
                     <li>Facebook</li>
                     <li>Github</li>
                     <li>LinkedIn</li>
                  </ul>
               </aside>
               <nav>
                  <h6 className="footer-title">Company</h6>
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Works</a>
                  <a className="link link-hover">Latest News</a>
                  <a className="link link-hover">Careers</a>
               </nav>
               <nav>
                  <h6 className="footer-title">Product</h6>
                  <a className="link link-hover">Prototype</a>
                  <a className="link link-hover">Plan & Pricing</a>
                  <a className="link link-hover">Customers</a>
                  <a className="link link-hover">Integration</a>
               </nav>
               <nav>
                  <h6 className="footer-title">Support</h6>
                  <a className="link link-hover">Help Desk</a>
                  <a className="link link-hover">Sales</a>
                  <a className="link link-hover">Become a partner</a>
                  <a className="link link-hover">Developer</a>
               </nav>
               <nav>
                  <h6 className="footer-title">Contact</h6>
                  <a className="link link-hover">524 Broadway, NYC</a>
                  <a className="link link-hover">+1 777-987-3256</a>
               </nav>
            </div>
            <div className="footer items-center border-t pt-4">
               <div className="w-full flex justify-between">
                  <p>
                     Copyright © {new Date().getFullYear()} - All right reserved
                  </p>
                  <p>Powered by CareerHub</p>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;

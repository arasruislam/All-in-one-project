import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer bg-base-300 text-base-content items-center p-4 rounded">
         <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
         </aside>
         <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
               <FaFacebook size={25} />
            </a>
            <a>
               <FaGithub size={25} />
            </a>
            <a>
               <FaLinkedin size={25} />
            </a>
         </nav>
      </footer>
   );
};

export default Footer;

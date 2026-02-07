import { useState } from "react";
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import MobileNav from "./MobileNav.jsx";
import { navLinks } from '../data/Navlinks.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkStyles = "hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition";

  return (
    <div className="bg-primary">
      <nav className="w-full lg:max-w-5/6 py-4 px-10 flex justify-between items-center md:mx-auto text-dark">
        
        <Link to="/" className="text-xl font-bold z-49 cursor-pointer">
          Maybahay
        </Link>

        <ul className="hidden md:flex gap-6 items-center text-base md:gap-4 md:text-sm lg:text-base">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={linkStyles}>{link.name}</Link>
            </li>
          ))}
          <Link to="/adopt">
            <button className="px-4 py-2 rounded-xl bg-dark text-white hover:duration-150 ease-in-out hover:shadow-lg hover:text-primary cursor-pointer transition">
              Adopt now!
            </button>
          </Link>
        </ul>

        <div 
          className={`fixed inset-0 bg-dark/70 transition-opacity duration-500 z-40 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={toggleMenu} 
        />

        {/* Hamburger */}
        <div className="md:hidden z-55 text-xl font-semibold cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
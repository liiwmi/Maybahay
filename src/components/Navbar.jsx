import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; //hamburger
import AdoptNowButton from "./AdoptNowButton.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary">
      <nav className="w-full lg:max-w-5/6 py-4 px-10 flex justify-between items-center md:mx-auto text-dark">
        {/* Logo */}
        <div className="text-xl font-bold z-49 cursor-default">Maybahay</div>

        <ul className="hidden md:flex gap-6 items-center text-base">
          <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
            About
          </li>
          <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
            Contact us
          </li>
          <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
            Join us
          </li>
          <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
            Our Pets
          </li>
          <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
            FAQs
          </li>
          <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
            Donate
          </li>
          <button className=" px-4 py-2 rounded-xl bg-dark text-white hover:duration-150 ease-in-out hover:shadow-lg duration-150 hover:text-primary  cursor-pointer transition">
            Adopt now!
          </button>
        </ul>

        {/*background Overlay*/}
        <div 
          className={`fixed inset-0 bg-dark/70 transition-opacity duration-500 z-40 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={toggleMenu} 
        />
        {/* Hamburger Icon (Visible only on mobile) */}
        <div
          className="md:hidden z-55 text-xl font-semibold cursor-pointer "
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed w-4/6 md:w-[40%] top-0 right-0 h-full bg-white text-base flex flex-col items-center justify-center gap-6 transition-all duration-300 z-51 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >

        
          <li className="list-none" onClick={toggleMenu}>
            About
          </li>
          <li className="list-none " onClick={toggleMenu}>
            Contact us
          </li>
          <li className="list-none" onClick={toggleMenu}>
            Join us
          </li>
          <li className="list-none " onClick={toggleMenu}>
            Our Pets
          </li>
          <li className="list-none" onClick={toggleMenu}>
            FAQs
          </li>
          <li className="list-none " onClick={toggleMenu}>
            Donate
          </li>
          <AdoptNowButton className="w-7/8 text-primary"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

<<<<<<< HEAD
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install with: npm install react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
         
  
  <div className="bg-primary">
    <nav className="w-full lg:max-w-5/6 py-4 px-10 flex justify-between items-center md:mx-auto text-dark">
    {/* Logo */}
    <div className="text-xl font-bold z-50 cursor-default">Maybahay</div>

    {/* Desktop Links (Hidden on mobile) */}
    <ul className="hidden md:flex gap-6 items-center text-base">
      <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
        About
      </li>
      <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
        Contact us
      </li>
      <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
        Our Pets
      </li>
      <li className="hover:duration-150 ease-in-out hover:scale-105 hover:text-white cursor-pointer transition">
        Donate
      </li>
      <button className=" px-4 py-2 rounded-xl bg-dark text-white hover:duration-150 ease-in-out hover:shadow-lg duration-150 hover:text-primary  cursor-pointer transition">
        Adopt now!
      </button>
    </ul>

    {/* Hamburger Icon (Visible only on mobile) */}
    <div
      className="md:hidden z-50 text-sm cursor-pointer"
      onClick={toggleMenu}
    >
      {isOpen ? <HiX /> : <HiMenuAlt3 />}
    </div>

    {/* Mobile Menu Overlay */}
    <div
      className={`fixed w-1/2 md:w-[40%] top-0 left-0 h-full bg-white text-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 z-50 ${
       isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
       }`}
    >
      <li className="list-none " onClick={toggleMenu}>
        About
      </li>
      <li className="list-none " onClick={toggleMenu}>
        Contact us
      </li>
      <li className="list-none " onClick={toggleMenu}>
        Our Pets
      </li>
      <li className="list-none " onClick={toggleMenu}>
        Donate
      </li>
      <button className="bg-emerald-500 px-10 py-4 rounded-full font-bold text-emerald-950">
        Adopt now!
      </button>
    </div>
  </nav>
  </div>
        
=======
import "../styles/Index.css";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 flex md:justify-between items-center py-6 px-10 md:px-20 text-white">
        <div className="flex items-center gap-3 text-xl font-bold">
          <h1>Maybahay</h1>
        </div>
        <ul className="flex items-center space-x-10">
          <li>About</li>
          <li>Contact us</li>
          <li>Our Pets</li>
          <li>Donate</li>
          <li>
            <button
              type="button"
              command="--toggle"
              className="bg-primary hover:bg-secondary hover:text-white text-dark font-medium py-2 px-4 rounded-4xl"
            >
              Adopt now!
            </button>
          </li>
        </ul>
      </nav>
    </>
>>>>>>> 4d5f43e87d5a4e83e3fada723ed396cacad679cd
  );
};

export default Navbar;

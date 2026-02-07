import { Link } from 'react-router-dom';
import AdoptNowButton from "./AdoptNowButton.jsx";
import { navLinks } from '../data/Navlinks.jsx';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed w-4/6 md:w-[40%] top-0 right-0 h-full bg-white text-base flex flex-col items-center justify-center gap-6 transition-all duration-300 z-51 ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {navLinks.map((link) => (
        <Link 
          key={link.path} 
          to={link.path} 
          className="list-none" 
          onClick={toggleMenu}
        >
          {link.name}
        </Link>
      ))}
      <AdoptNowButton className="w-7/8 text-primary" onClick={toggleMenu} />
    </div>
  );
};

export default MobileNav;
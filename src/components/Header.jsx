import { RiInstagramFill } from "react-icons/ri";
import headerImage from "../assets/header-img.jpg";
import Navbar from "./Navbar.jsx";
import { FaFacebookSquare } from "react-icons/fa";
import "../styles/Index.css";

const Header = () => {
  return (
    <header className="relative w-full h-[80vh] mb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <div
        className="absolute inset-0 bg-cover bg-position[50%_25%]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative h-full max-w-7xl my-10 mx-auto flex items-center justify-end px-10 md:px-20">
          <div className="w-full md:w-1/2 lg:w-2/5 text-right md:text-left">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[0.9] drop-shadow-lg">
              Building families, <span className="text-primary">one paw </span>
              at a time.
            </h1>
            <p className="text-white text-lg mt-4 mb-4 max-w-md ml-auto md:ml-0">
              Maybahay connects loving homes with pets in need. Adopt a best
              friend today!
            </p>
            <div className="flex gap-4 text-1xl">
              <a
                href="#"
                className="text-white text-lg hover:text-primary transition"
              >
                <FaFacebookSquare size={32} className="rounded-10" />
              </a>
              <a
                href="#"
                className="text-white text-xl hover:text-primary transition"
              >
                <RiInstagramFill size={33.5} />
              </a>
            </div>
            <button className="mt-8 bg-white text-blue-600 font-bold py-3 px-10 rounded-full hover:bg-primary transition shadow-lg">
              Adopt now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

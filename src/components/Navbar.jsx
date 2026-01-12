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
  );
};

export default Navbar;

import Header from "../components/Header.jsx";
import Pets from "../components/Pets.jsx";
import "../styles/Index.css";
import Adopt from "./Adopt.jsx";
import Navbar from "../components/Navbar.jsx";
import Stats from "../components/Stats.jsx";
import Carousel from "../components/Carousel.jsx";

const App = () => {
  return (
    <div className="min-h-dvh w-full text-dark scroll-smooth overflow-x-clip">
      <Navbar/>
      <Header/>
      <Stats />
      <Carousel/>
    </div>
  );
};

export default App;

import Header from "../components/Header.jsx";
import Pets from "../components/Pets.jsx";
import "../styles/Index.css";
import Adopt from "./Adopt.jsx";
import Navbar from "../components/Navbar.jsx";
import Stats from "../components/Stats.jsx";
import Carousel from "../components/Carousel.jsx";
import Card from "../components/Card.jsx";

const App = () => {
  return (
    <div className="min-h-dvh w-full text-dark scroll-smooth scroll-x-hidden">
      <Navbar/>
      <Header/>
      <Stats />
      <Carousel/>
      <Card/>
    </div>
  );
};

export default App;

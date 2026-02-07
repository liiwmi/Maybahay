import Header from "../components/Header.jsx";
import "../styles/Index.css";
import Stats from "../components/Stats.jsx";
import Carousel from "../components/Carousel.jsx";

const Home = () => {
  return (
    <div className="min-h-dvh w-full text-dark scroll-smooth overflow-x-clip">
      <Header/>
      <Stats />
      <Carousel/>
    </div>
  );
};

export default Home;

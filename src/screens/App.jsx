import Header from "../components/Header.jsx";
import Pets from "../components/Pets.jsx";
import "../styles/Index.css";
import Adopt from "./Adopt.jsx";
import Navbar from "../components/Navbar.jsx";
import Stats from "../components/Stats.jsx";

const App = () => {
  return (
    <div className="min-h-dvh w-full text-dark">
      <Navbar/>
      <Header/>
      <Stats />
    </div>
  );
};

export default App;

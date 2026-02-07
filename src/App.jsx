import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./screens/Home.jsx";
import PetList from "./screens/Pets.jsx";

const App = () => {
  return (
    <Router>
      <div className="min-h-dvh w-full text-dark scroll-smooth overflow-x-clip">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<PetList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import "../styles/Index.css";
import Pets from "../components/Pets.jsx";
import { useEffect, useState } from "react";
import PET_DATA from "../../public/pets.js";

const Adopt = () => {
  return (
    // 'relative z-0' ensures it stays behind the Header's z-20 dog
    // Added 'mt-[-50px]' (negative margin) to pull this section UP under the dog
    <div className="w-full px-6 bg-secondary relative z-0 mt-[-40px] pt-16 pb-10 rounded-tr-[60px]">
        <div className="flex w-[70%]">
          <h2 className="text-white text-2xl font-bold tracking-wide mb-8">
          Meet your future best friend
        </h2>
          </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PET_DATA.map((pet) => (
            <Pets key={pet.id} animal={pet} />
          ))}
      </div>
    </div>
  );
};

export default Adopt;

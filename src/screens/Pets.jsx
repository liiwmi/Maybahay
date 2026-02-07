import "../styles/Index.css";
import PET_DATA from "../data/pets.js"; // This is your external data source
import Card from "../components/Card.jsx";

export default function PetList() {
  return (
    <div className="w-full md:py-1 lg:py-8 mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 bg-white rounded-3xl py-4 px-6 shadow-lg max-w-2xl mx-auto">
        Available Pets for Adoption
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {PET_DATA.map((animal) => (
          <Card
            key={animal.id}
            name={animal.name}
            breed={animal.breed}
            age={animal.age}
            image={animal.image}
            status={animal.status}
          />
        ))}
      </div>
    </div>
  );
}

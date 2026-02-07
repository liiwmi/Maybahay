import "../styles/Index.css";
import PET_DATA from "../data/pets.js"; 

function Card({ name, breed, image, age, status }) {
  return (
    // "wag mo galawin!!"
    <div className="w-full p-2">
      <div className="rounded-2xl p-2 bg-white hover:shadow-xl transition-shadow duration-300">
        {/*Image Container*/}
        <div className="relative bg-white rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`${name} the ${breed}`}
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
        {/*Pet's information*/}
        <div className="px-1 pt-2">
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="leading-none text-gray-700 text-base">{breed}</p>
          <p className="leading-none text-gray-600 text-base">{age}</p>
          <span
            className={`inline-block px-2 py-1 text-sm font-semibold rounded-full mt-1 ${
              status === "Available"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PetList() {
  return (
    <div className="w-full md:py-1 lg:py-8 mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 bg-white rounded-3xl py-4 px-6 shadow-lg max-w-2xl mx-auto">
        Available Pets for Adoption
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {/* We are now mapping directly from the imported PET_DATA */}
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

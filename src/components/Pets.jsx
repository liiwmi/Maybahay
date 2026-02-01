import "../styles/Index.css";

const Pets = ({ animal }) => {
  if (!animal) return <div className="hidden">Loading...</div>;
  return (
    <div className="bg-white text-dark shadow-md rounded-lg overflow-hidden w-6rem hover:shadow-xl transition-shadow duration-500">
      {/*Pet img */}
      <div className="relative h-64 w-full">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover"
        />

        {/* Pet status */}
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          {animal.status || "available"}
        </span>
      </div>

      {/* Pet details */}
      <div className="p-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-1xl font-bold text-primary">{animal.name}</h3>
          <span className="text-secondary font-semibold">{animal.gender}</span>
        </div>
        <p className="text-dark text-sm mb-4 line-clamp-2">
          {animal.description}
        </p>
        //Stats grid
        <div className="flex gap-3 mb-6">
          <div className="bg-primary px-3 py-1 rounded-lg text-xs font-medium text-white">
            {animal.age}
          </div>

          <div className="bg-primary px-3 py-1 rounded-lg text-xs font-medium text-white">
            {animal.breed}
          </div>
        </div>
        <button className="w-full bg-primary text-white font-bold py-3 rounded-1xl hover:bg-secondary">
          Adopt Me
        </button>
      </div>
    </div>
  );
};

export default Pets;

import "../styles/Index.css";
import Cat_4 from "../assets/pet_cards/cat_4.jpg";
import Cat_5 from "../assets/pet_cards/cat_4.jpg";
import PET_DATA from "../../public/pets.js";

function Card ({name, breed, image, age, status}){
   return(
            //wag mo galawin!!
      <div className="w-full md:w-4/4 md:py-2 md:px-10 p-5 lg:w-4/4 mx-auto">
         <div className="flex items-center rounded-xl">
            <div className="rounded-2xl shadow-lg p-2 bg-white hover:shadow-xl transition-shadow duration-300"> 
               {/*Image Container*/}
               <div className="relative bg-white rounded-xl overflow-hidden">
                  <img
                  src= {image}
                  alt={`${name} the ${breed}`}
                  className="w-full h-30 object-cover rounded-xl"
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
                  ? "bg-green-100 text-green-800" // Green for available pets
                  : "bg-gray-100 text-gray-800"   // Gray for other statuses
              }`}
            >
              {status}
            </span>
               </div> 
            </div>
         </div>
      </div>
      );
}
export default function PetList(){
   const PET_DATA =[
   {
    id: 24,
    name: "Mango",
    breed: "Puspin",
    animal_type: "Cat",
    age: "6 months",
    image: Cat_4,
    status: "Available"
   },
   {
    id: 25,
    name: "Apple",
    breed: "Puspin",
    animal_type: "Cat",
    age: "6 months",
    image: Cat_5,
    status: "Available"
  },
];

 return (
    <div className="w-full md:py-1 lg:py-8 mx-auto px-1">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8 bg-white rounded-3xl py-4 px-6 shadow-lg max-w-2xl mx-auto">
        Available Pets for Adoption
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 max-w-10xl mx-auto">
        {PET_DATA.map(animal => (  
          <Card
            key={animal.id}
            name={animal.name}
            animal_type={animal.animal_type}
            breed={animal.breed}
            age={animal.age}
            image={animal.image}
            status={animal.status}
            gender={animal.gender}
          />
        ))}
      </div>
    </div>
  );
}
import "../styles/Index.css";
import Cat_4 from "../assets/pet_cards/cat_4.jpg";
import Cat_5 from "../assets/pet_cards/cat_4.jpg";
import PET_DATA from "./pets";


{/*const Card = () =>{
   return(
      <div className="w-full md:w-3/4 md:py-8 p-10 lg:w-3/4 lg:py-130 xl:w-2/4">
      <div className="flex items-center rounded-1xl">
      <div className="rounded-2xl shadow-lg p-3"> 

       <div className="relative bg-white rounded-xl">
        <img
          src= {picture}
          alt="Mango"
          className="w-full h-20 object-cover"
        />
      </div>

    <div className="px-1 pt-2">
          <h2 className="text-xl font-bold text-gray-900">Mango</h2>
         <p className="leading-none text-gray-700 text-base">Puspin</p>
         <p className="text-gray-600 text-base">6 months</p>
    </div> 
      
      </div>
      </div>
      </div>


   );
};*/}

function Card ({name, breed, image, age, status}){
   return(
            //wag mo galawin!!
      <div className="w-full md:w-4/4 md:py-2 md:px-10 p-5 lg:w-4/4 lg:">
         <div className="flex items-center rounded-1xl">
            <div className="rounded-2xl shadow-lg p-3"> 
               {/*Image Container*/}
               <div className="relative bg-white rounded-xl">
                  <img
                  src= {image}
                  alt={`${name} the ${breed}`}
                  className="w-full h-22 object-cover"
                  />
               </div>
               {/*Pet's information*/}
               <div className="px-1 pt-2">
                     <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                     <p className="leading-none text-gray-700 text-base">{breed}</p>
                     <p className="leading-none text-gray-600 text-base">{age}</p>
                     <p className="text-gray-600 text-base">{status}</p>
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
    <div className="w-full md:w-4/4 md:py-1 lg:w-5/5 lg:py-130 mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-11 bg-white rounded-3xl py-2 px-4 shadow-lg max-w-2xl mx-auto ">
        Available Pets for Adoption
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-7xl mx-auto">
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
import Cat_3 from "../assets/pet_cards/cat_3.jpg";

const Adopt = () => {
  return (
    <div className="min-h-screen">
      <div className=" mx-auto bg-white shadow-lg overflow-hidden">
        
        {/* Image */}
        <div className="relative">
          <img
            src={Cat_3}
            alt="Banana"
            className="w-full h-90 object-cover"
          />
        </div>

        <div className="p-4">
          <h1 className="text-3xl font-bold text-dark-900">Banana</h1>
          <p className="text-lg font-medium mb-4 text-primary" >Puspin</p>

          {/* Boxes */}
          <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-5">
            <div className="bg-gray-200 rounded-2xl h-16 aspect-square"></div>
            <div className="bg-gray-200 rounded-2xl h-16 aspect-square"></div>
            <div className="bg-gray-200 rounded-2xl h-16  aspect-square"></div>
            <div className="bg-gray-200 rounded-2xl h-16 aspect-square"></div>
          </div>
          </div>

       
          <div className="mb-4">
            <h2 className="text-xl font-bold text-dark-900 mt-6">About this pet</h2>
            <p className="text-dark-500 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          
          <button 
            className="w-full text-white bg-primary font-bold text-lg py-4 rounded-2xl transition duration-200 hover:opacity-90"
        
          >
            Adopt this pet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
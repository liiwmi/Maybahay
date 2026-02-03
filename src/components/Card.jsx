import "../styles/Index.css";
import picture from "../assets/pet_cards/cat_4.jpg";


const Card = () =>{
   return(
      <div className="h-12 w-37 flex items-center justify-center rounded-1xl mt-12 mx-2">
      <div className="rounded-2xl shadow-lg p-3"> 

       <div className="relative bg-white rounded-xl">
        <img
          src= {picture}
          alt="Mango"
          className="w-full h-25 object-cover rounded-2xl"
        />
    </div>

    <div className="px-1 pt-4">
          <h2 className="text-2xl font-bold text-gray-900">Mango</h2>
          
   

         <p className="leading-none text-gray-700 text-base">Puspin</p>
         <p className="text-gray-600 text-base">6 months</p>

      </div> 
      
      </div>
   </div>


   );
};
export default Card;
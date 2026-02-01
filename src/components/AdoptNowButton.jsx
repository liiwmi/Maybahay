import { twMerge } from 'tailwind-merge';

const AdoptNowButton = ({ className }) => {
return (
   <button className={twMerge("bg-dark text-primary px-3 py-2 rounded-xl text-m md:text-base hover:duration-150 ease-in-out hover:shadow-lg duration-150 hover:text-white  cursor-pointer transition", className)}>
      Adopt now!
    </button>
)
}

export default AdoptNowButton;
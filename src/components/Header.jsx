import Dog from "../assets/dog.svg";
import AdoptNowButton from "./AdoptNowButton";

const Header = () => {
  return (
    <div className="w-screen bg-primary">
      <header className="w-full h-4/6 mx-auto md:justify-center md:flex md:items-center lg:w-6xl md:max-w-3/4  cursor-default">
        <section className="flex flex-row items-center justify-center px-2 pt-4 md:justify-center md:pt-10 md:px-6 max-w-6xl ">
          <div className="w-3/5 max-w-sm md:w-2/5 lg:w-1/4">
            <img
              src={Dog}
              alt="Happy dog"
              className="w-full h-auto object-contain drop-shadow-xl"
            ></img>
          </div>

          <div className=" w-2/5 text-left order-2 mb-14 md:mb-6 md:w-3/5 lg:w-3/4 md:py-6">
            <h1 className="text-[27px] md:text-2xl lg:text-3xl font-bold mb-8 md:mb-0 leading-none">
              Building families, <br className="md:hidden" />
              <span className="text-white"> one paw</span>
              <br className="md:hidden" /> at a time.
            </h1>
            <p className="hidden md:block md:text-sm lg:text-base py-4 mb-6">
              Maybahay helps rescue and rehome stray dogs and cats across the
              Philippines.{" "}
            </p>
            <AdoptNowButton className=" text-primary"/>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;

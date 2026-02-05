import Dog from "../assets/dog.svg";
import AdoptNowButton from "./AdoptNowButton";

const Header = () => {
  return (
    /* 1. Use the <header> as the root and the background provider */
    <header className="w-full bg-primary cursor-default">
      {/* 2. This single container handles centering, max-width, and flex layout */}
      <div className="mx-auto flex flex-row items-center justify-center px-4 py-10 md:py-16 md:max-w-5/6 lg:max-w-6/8">
        {/* 3. Image Wrapper (Keep this to control the image's flex-basis) */}
        <div className="w-1/2 max-w-sm md:w-6/11 lg:w-1/2">
          <img
            src={Dog}
            alt="Happy dog"
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* 4. Text Content Wrapper */}
        <div className="w-2/5 text-left mb-6 md:w-7/11 lg:w-1/2">
          <h1 className="text-[27px] md:text-4xl lg:text-5xl font-bold leading-8 mb-6 md:leading-tight md:mb-0">
            Building families, <br className="md:hidden" />
            <span className="text-white font-extrabold"> one paw</span>
            <br className="md:hidden" /> at a time.
          </h1>
          <p className="hidden md:block md:text-sm lg:text-base py-4 mb-6">
            Maybahay helps rescue and rehome stray dogs and cats across the
            Philippines.
          </p>
          <AdoptNowButton className="text-primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;

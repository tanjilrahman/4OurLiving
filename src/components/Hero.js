import logo from "../logo.svg";
import arrow from "../arrow.svg";
import star from "../star.svg";

const Hero = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto px-8 py-4 md:px-14 md:py-6 lg:px-20 lg:py-8">
        <header className="hidden md:flex items-center">
          <div className="mr-auto w-48 md:w-52 lg:w-auto">
            <img src={logo} alt="logo" />
          </div>

          <div className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-20 font-medium text-xs md:text-sm lg:text-base">
            <a
              href="/"
              className="hover:underline hover:text-primary hover:cursor-pointer"
            >
              Home
            </a>
            <a
              href="/#cards"
              className="hover:underline hover:text-primary hover:cursor-pointer"
            >
              4R's
            </a>
            <a
              href="/#about"
              className="hover:underline hover:text-primary hover:cursor-pointer"
            >
              About
            </a>
          </div>

          <a
            href="mailto: "
            className="hidden md:block ml-auto px-4 py-2 md:px-8 md:py-2 lg:px-10 lg:py-4 text-xs md:text-base bg-primary rounded-full font-bold text-white hover:cursor-pointer hover:bg-secondary hover:ring-2 hover:ring-primary hover:text-primary"
          >
            <p>Contact us</p>
          </a>
        </header>

        <section className="pt-10 md:pt-0 relative grid grid-cols-1 md:grid-cols-2 mb-6 md:mb-0 lg:my-7 md:gap-12 lg:gap-16">
          <div className="md:hidden my-10 md:my-16 lg:my-24 z-10">
            <img
              src="/images/1.jpg"
              alt="hero"
              className="rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[70px] md:rounded-bl-[70px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] object-contain"
            />
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="hidden lg:block absolute top-1 left-72"
          />
          <img
            src={star}
            alt="star"
            className="hidden lg:block absolute top-16 right-28 z-20"
          />
          <img
            src={star}
            alt="star"
            className="hidden lg:block absolute bottom-12 left-0"
          />
          <div className="my-auto">
            <h1 className="text-black text-2xl md:text-3xl lg:text-5xl font-display font-bold lg:leading-normal">
              <span className="text-primary">Four Our Living</span>, <br />A
              door-to-door waste removal and recycling service
            </h1>
          </div>
          <div className="hidden md:block my-10 md:my-16 lg:my-24 z-10">
            <img
              src="/images/1.jpg"
              alt="hero"
              className="rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[70px] md:rounded-bl-[70px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

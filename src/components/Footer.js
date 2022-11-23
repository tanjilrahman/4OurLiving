import logo from "../logo footer.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto text-center items-center py-12 text-xs md:text-sm lg:text-base">
        <img src={logo} alt="logo" className="mx-auto w-60 md:w-72 lg:w-auto" />
        <p className="px-8 max-w-3xl text-center mx-auto mt-2">
          Four Our Living can assist you at every step of the removal and
          disposal process. A door-to-door waste removal and recycling service
          for multi-family residential homes such as apartment buildings,
          jointly owned dwellings, retirement communities and student
          accommodation.
        </p>
        <a
          href="https://www.tribeninjas.com/"
          className="hover:cursor-pointer hover:underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./Tribe-logo.png"
            alt="TribeLogo"
            className="mx-auto w-24 md:w-44 my-0"
          />
        </a>

        <p>
          © 2022 Website and Marketing by{" "}
          <a
            href="https://www.tribeninjas.com/"
            className="hover:cursor-pointer hover:underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tribe Ninjas
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

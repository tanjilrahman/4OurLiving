import logo from "../logo footer.svg";
const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto text-center items-center space-y-8 py-12 text-xs md:text-sm lg:text-base">
        <img src={logo} alt="logo" className="mx-auto w-60 md:w-72 lg:w-auto" />
        <p className="px-8 max-w-3xl text-center mx-auto">
          Four Our Living can assist you at every step of the removal and
          disposal process. A door-to-door waste removal and recycling service
          for multi-family residential homes such as apartment buildings,
          jointly owned dwellings, retirement communities and student
          accommodation.
        </p>
        <p>
          © 2022{" "}
          <a
            href="https://www.tribeninjas.com/"
            className="hover:cursor-pointer hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            TribeNinjas.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

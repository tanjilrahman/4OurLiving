import { useEffect, useState } from "react";
import logo from "../logo.svg";
import menu from "../menu.svg";
import close from "../menu-close.svg";
import Fade from "react-reveal/Fade";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 200) {
      return setScroll(true);
    } else {
      return setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={`${
        !scroll
          ? "opacity-100 translate-y-0 md:opacity-0 md:-translate-y-10"
          : "opacity-100 translate-y-0"
      } bg-secondary fixed w-full transition-all duration-150 items-center border border-b-gray-300 z-30`}
    >
      <div className="flex items-center px-8 py-2 md:py-3 md:px-14 lg:px-20 max-w-7xl mx-auto">
        <div className="mr-auto w-48 md:w-52 lg:w-auto">
          <img src={logo} alt="logo" />
        </div>

        <Fade left={true} duration={400} opposite when={menuIsOpen}>
          <div
            className={`${
              menuIsOpen ? "block" : "hidden"
            } absolute top-full left-0 h-screen w-screen bg-secondary z-50`}
          >
            <div className="flex flex-col items-center mt-20 space-y-9">
              <a
                href="/"
                className="hover:underline hover:text-primary hover:cursor-pointer"
                onClick={() => setMenuIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/#cards"
                className="hover:underline hover:text-primary hover:cursor-pointer"
                onClick={() => setMenuIsOpen(false)}
              >
                4R's
              </a>
              <a
                href="/#about"
                className="hover:underline hover:text-primary hover:cursor-pointer"
                onClick={() => setMenuIsOpen(false)}
              >
                About
              </a>

              <a
                href="mailto: "
                className="px-4 py-2 bg-primary rounded-full font-bold text-white hover:cursor-pointer hover:bg-secondary hover:ring-2 hover:ring-primary hover:text-primary"
              >
                <p>Contact us</p>
              </a>
            </div>
          </div>
        </Fade>

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

        <div className="md:hidden ml-auto">
          {menuIsOpen ? (
            <img src={close} alt="" onClick={() => setMenuIsOpen(false)} />
          ) : (
            <img src={menu} alt="" onClick={() => setMenuIsOpen(true)} />
          )}
        </div>

        <div className="hidden md:block ml-auto px-4 py-2 md:px-8 md:py-2 lg:px-10 lg:py-4 text-xs md:text-base bg-primary rounded-full font-bold text-white hover:cursor-pointer hover:bg-secondary hover:ring-2 hover:ring-primary hover:text-primary">
          <p>Contact us</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

//import REACT ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { ImExit } from "react-icons/im";

//import ReactrouterDom
import { Link } from "react-router-dom";
//import react-scroll
import { Link as ScrollLink } from "react-scroll";
import useNav from "../../Hooks/useNav";

const Header = () => {
  const { nav, handleNav } = useNav();

  return (
    <div className="rounded-lg border-2 border-gray-700 m-2 container mx-auto">
      <header className="flex items-center justify-between p-2 md:p-10">
        <Link to={"/"}>
          <h1 className="text-white text-2xl uppercase md:text-3xl font-semibold">
            Russel Olaco
          </h1>
        </Link>
        <div className="flex">
          <div className="sm:hidden">
            {/* Hamburger Menu (mobile)*/}
            <button onClick={handleNav}>
              {nav ? <ImExit size={30} /> : <GiHamburgerMenu size={30} />}
            </button>
            {/* Navigation */}
            <div
              className={`fixed right-0 top-19 z-20 bg-gray-800 text-gray-300 h-full w-1/2 transition-transform transform duration-300 ${
                nav ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="flex flex-col gap-2 uppercase pt-5">
                <ScrollLink
                  to="portfolio"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Portfolio
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Technologies
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </nav>
            </div>
          </div>
          <nav className="hidden sm:flex gap-5 text-white uppercase font-semibold text-xl">
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Technologies
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Contact
            </ScrollLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

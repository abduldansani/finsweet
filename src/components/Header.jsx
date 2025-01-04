import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <header
      className={`bg-tintBlue max-lg:sticky top-0 shadow-2xl z-50 ${
        openNavigation &&
        "max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:shadow-2xl max-lg:w-full"
      }`}
    >
      <div className="container flex max-lg:flex-col lg:items-center py-6 lg:py-4 max-lg:gap-8">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" width={122} height={25} />
          <button
            onClick={() => setOpenNavigation(!openNavigation)}
            className="text-white lg:hidden"
          >
            {openNavigation ? "close" : "menu"}
          </button>
        </div>
        <div
          className={` ${openNavigation ? "flex" : "hidden"}
          lg:flex max-lg:flex-col lg:ml-auto font-medium text-colorWhite lg:items-center max-lg:gap-8`}
        >
          <nav className="max-lg:flex max-lg:flex-col">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.href}
                className={({ isActive }) =>
                  `mr-6 font-medium hover:text-white transition-colors ${
                    isActive ? "text-white" : "text-linkDefault"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
          <button className="px-12 py-4 xl:py-6 border-2 border-grey border-opacity-20 rounded-full lg:ml-5 w-fit hover:text-linkDefault transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

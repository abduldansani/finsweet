import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link, NavLink } from "react-router";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { headerVar, menuVar } from "../motion/headerVariants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (
      (latest > previous && latest > 350) ||
      (latest > document.documentElement.scrollHeight - 1000 &&
        window.innerWidth >= 1024)
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={headerVar}
      animate={hidden ? "hidden" : "visible"}
      className="bg-tintBlue sticky top-0 shadow-2xl z-50"
    >
      <div className="container flex items-center justify-between py-6 lg:py-4">
        <img src={logo} alt="logo" width={122} height={25} />
        <div className="hidden lg:flex ml-auto font-medium text-colorWhite items-center">
          <nav className="max-lg:hidden">
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
          <Link to="contact">
            <button className="px-12 py-4 xl:py-6 border-2 border-grey border-opacity-20 rounded-full lg:ml-5 w-fit hover:text-linkDefault transition-colors">
              Contact us
            </button>
          </Link>
        </div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white lg:hidden"
        >
          <img src={showMenu ? close : menu} alt="+" width={25} height={25} />
        </button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            variants={menuVar}
            initial="initial"
            animate="animate"
            exit="exit"
            className="lg:hidden h-dvh fixed top-0 left-0 bg-tintBlue shadow-xl w-1/2 max-w-96 pt-8 pl-4 flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.href}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `font-medium hover:text-white transition-colors ${
                    isActive ? "text-white" : "text-linkDefault"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
            <Link to="contact">
              <button
                onClick={() => setShowMenu(false)}
                className="mt-8 py-2 px-6 border-2 text-white border-grey border-opacity-20 rounded-full lg:ml-5 w-fit hover:text-linkDefault transition-colors"
              >
                Contact us
              </button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

import { useEffect, useState } from "react";
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

  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

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
      className="sticky top-0 z-50 bg-tintBlue shadow-2xl"
    >
      <div className="container flex items-center justify-between py-6 lg:py-4">
        <img src={logo} alt="logo" width={122} height={25} />
        <div className="ml-auto hidden items-center font-medium text-colorWhite lg:flex">
          <nav className="max-lg:hidden">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.href}
                className={({ isActive }) =>
                  `mr-6 font-medium transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-linkDefault"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
          <Link to="contact">
            <button className="w-fit rounded-full border-2 border-grey border-opacity-20 px-12 py-4 transition-colors hover:text-linkDefault lg:ml-5 xl:py-6">
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
            className="fixed left-0 top-0 flex h-dvh w-1/2 max-w-96 flex-col gap-4 bg-tintBlue pl-4 pt-8 shadow-xl lg:hidden"
          >
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.href}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-white ${
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
                className="mt-8 w-fit rounded-full border-2 border-grey border-opacity-20 px-6 py-2 text-white transition-colors hover:text-linkDefault lg:ml-5"
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

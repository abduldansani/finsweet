import { Link } from "react-router";
import { logo } from "../assets";
import { navLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="bg-tintBlue">
        <div className="container flex flex-col pt-14 md:flex-row xl:pt-20">
          <div className="md:mr-20 xl:mr-36">
            <img
              src={logo}
              alt="logo"
              width={122}
              height={25}
              className="xl:h-8 xl:w-40"
            />
            <p className="mt-4 font-medium text-grey text-opacity-80 xl:mt-8">
              We are always open to discuss your project and{" "}
              <br className="max-lg:hidden" /> improve your online presence.
            </p>
            <div className="mt-6 flex w-fit flex-wrap gap-4 bg-yellow px-4 py-2 text-darkBlue md:mt-16 lg:mt-24 lg:gap-10 lg:px-10 lg:py-6 xl:w-[517px]">
              <div className="flex flex-col gap-1 lg:gap-2">
                <div className="text-size-18 font-medium">Email me at</div>
                <a
                  href="mailto:contact@website.com"
                  className="text-opacity-80"
                >
                  contact@website.com
                </a>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2">
                <div className="text-size-18 font-medium">Call us</div>
                <a href="tel:0927627728525" className="text-opacity-80">
                  0927 6277 28525
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="text-white">Lets Talk!</h2>
            <p className="mt-4 font-medium text-grey text-opacity-80 md:mt-8">
              We are always open to discuss your project,{" "}
              <br className="max-lg:hidden" /> improve your online presence and
              help with your <br className="max-lg:hidden" /> UX/UI design
              challenges.
            </p>
            <div className="mt-8 flex gap-6 max-md:mb-10">
              {socialMedia.map((social, i) => (
                <Link key={i} to={social.link}>
                  <img
                    src={social.icon}
                    alt={social.title}
                    width={16}
                    height={16}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white max-lg:hidden">
        <div className="container flex justify-between py-8 font-medium text-darkBlue">
          <div className="">Copyright 2022, Finsweet.com</div>
          <nav>
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="mr-6 font-medium transition-colors hover:text-black"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

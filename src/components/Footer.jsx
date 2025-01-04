import { Link } from "react-router";
import { logo } from "../assets";
import { navLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="bg-tintBlue">
        <div className="container flex-col md:flex-row flex pt-14 xl:pt-20">
          <div className="md:mr-20 xl:mr-36">
            <img src={logo} alt="logo" width={160} height={32} />
            <p className="mt-4 xl:mt-8 font-medium text-grey text-opacity-80">
              We are always open to discuss your project and <br /> improve your
              online presence.
            </p>
            <div className="w-fit mt-6 md:mt-24 bg-yellow py-2 px-4 md:py-6 md:px-10 xl:w-[517px] text-darkBlue flex flex-wrap gap-4 lg:gap-10">
              <div className="">
                <div className="text-size-18 font-medium">Email me at</div>
                <p className="text-opacity-80 mt-2">contact@website.com</p>
              </div>
              <div className="">
                <div className="text-size-18 font-medium">Call us</div>
                <p className="text-opacity-80 mt-2">0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="text-white">Lets Talk!</h2>
            <p className="mt-4 md:mt-8 font-medium text-grey text-opacity-80">
              We are always open to discuss your project, <br /> improve your
              online presence and help with your <br /> UX/UI design challenges.
            </p>
            <div className="mt-8 flex gap-6 mb-10 md:mb-0">
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
        <div className="container font-medium text-darkBlue flex justify-between py-8">
          <div className="">Copyright 2022, Finsweet.com</div>
          <nav>
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="mr-6 font-medium hover:text-black transition-colors"
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

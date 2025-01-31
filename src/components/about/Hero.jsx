import { aboutHero } from "../../assets";
import Section from "../Section";

const Hero = () => {
  return (
    <Section>
      <div className="container flex items-center justify-between gap-6 max-lg:flex-col md:gap-10 xl:gap-36">
        <div className="">
          <div className="mb-2 text-lg font-medium">About us</div>
          <h1 className="mb-6 xl:mb-8">Our designs solve problems</h1>
          <p className="text-opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <img
          src={aboutHero}
          alt="hero image"
          width={547}
          height={336}
          className="max-lg:mx-auto max-lg:w-[95%]"
        />
      </div>
    </Section>
  );
};

export default Hero;

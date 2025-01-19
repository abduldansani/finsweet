import Section from "../Section";
import Button from "../Button";
import { featuresHero } from "../../assets";
import Users from "../Users";

const Hero = () => {
  return (
    <>
      <Section className="bg-tintBlue">
        <div className="container flex max-lg:flex-col-reverse justify-between gap-10 xl:gap-16 text-white items-center">
          <div className="space-y-6 xl:space-y-12 text-center lg:text-start">
            <h1>
              All the features <br className="max-xl:hidden" /> you need
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>View Pricing</Button>
          </div>
          <div className="shrink-0 lg:w-1/2 max-lg:w-4/5 mx-auto max-lg:max-w-[600px]">
            <img
              src={featuresHero}
              alt="features illustration"
              width={639}
              height={409}
              className=""
            />
          </div>
        </div>
      </Section>
      <div className="py-20 overflow-hidden">
        <Users />
      </div>
    </>
  );
};

export default Hero;

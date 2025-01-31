import Section from "../Section";
import Button from "../Button";
import { featuresHero } from "../../assets";
import Users from "../Users";

const Hero = () => {
  return (
    <>
      <Section className="bg-tintBlue">
        <div className="container flex items-center justify-between gap-10 text-white max-lg:flex-col-reverse xl:gap-16">
          <div className="space-y-6 text-center lg:text-start xl:space-y-12">
            <h1>
              All the features <br className="max-xl:hidden" /> you need
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>View Pricing</Button>
          </div>
          <div className="mx-auto shrink-0 max-lg:w-4/5 max-lg:max-w-[600px] lg:w-1/2">
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
      <div className="overflow-hidden py-20">
        <Users />
      </div>
    </>
  );
};

export default Hero;

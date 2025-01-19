import { Link } from "react-router";
import Section from "../Section";
import { arrowBlue, numberFrame } from "../../assets";
import { workSteps } from "../../constants";

const HowWeWork = () => {
  return (
    <Section className="bg-grey text-darkBlue">
      <div className="container flex justify-between max-md:flex-col gap-10">
        <div className="space-y-4 md:w-2/3">
          <h2>How we work</h2>
          <p className="text-opacity-70">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <br className="max-xl:hidden" /> adipiscing elit, sed do eiusmod
            tempor.
          </p>
          <Link to="/contact" className="inline-block">
            <div className="flex items-center gap-4 text-royalBlue font-medium">
              <div className="">Get in touch with us</div>
              <img src={arrowBlue} alt="-" width={24} />
            </div>
          </Link>
        </div>
        <div className="grid max-sm:gap-x-4 max-sm:gap-y-8 sm:gap-6 lg:gap-12 grid-cols-2">
          {workSteps.map((step) => (
            <div key={step.id} className="space-y-3 md:space-y-5">
              <div className="relative flex items-center justify-center size-[50px]">
                <img
                  src={numberFrame}
                  alt=""
                  width={50}
                  height={50}
                  className="absolute inset-0"
                />
                <div className="z-10 text-white font-medium">{step.number}</div>
              </div>
              <h5>{step.title}</h5>
              <p className="text-darkBlue text-opacity-70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowWeWork;

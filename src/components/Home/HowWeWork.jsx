import { Link } from "react-router";
import Section from "../Section";
import { arrowBlue, numberFrame } from "../../assets";
import { workSteps } from "../../constants";

const HowWeWork = () => {
  return (
    <Section className="bg-grey text-darkBlue">
      <div className="container flex justify-between gap-10 max-md:flex-col">
        <div className="space-y-4 md:w-2/3">
          <h2>How we work</h2>
          <p className="text-opacity-70">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <br className="max-xl:hidden" /> adipiscing elit, sed do eiusmod
            tempor.
          </p>
          <Link to="/contact" className="inline-block">
            <div className="flex items-center gap-4 font-medium text-royalBlue">
              <div className="">Get in touch with us</div>
              <img src={arrowBlue} alt="-" width={24} />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-8 sm:gap-6 lg:gap-12">
          {workSteps.map((step) => (
            <div key={step.id} className="space-y-3 md:space-y-5">
              <div className="relative flex size-[50px] items-center justify-center">
                <img
                  src={numberFrame}
                  alt=""
                  width={50}
                  height={50}
                  className="absolute inset-0"
                />
                <div className="z-10 font-medium text-white">{step.number}</div>
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

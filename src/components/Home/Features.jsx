import { features } from "../../constants";
import Section from "../Section";

const Features = () => {
  return (
    <Section className="bg-grey">
      <div className="container">
        <div className="text-center font-medium mb-3">Features</div>
        <h2 className="mb-4 text-center">
          Design that solves <br className="max-md:hidden" /> problems, one
          product at <br className="max-md:hidden" /> a time
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-4 p-12 bg-white text-darkBlue shadow-sm"
            >
              <img src={feature.icon} alt="" width={35} height={35} />
              <h6>{feature.title}</h6>
              <p className="text-opacity-70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;

import { features } from "../../constants";
import Section from "../Section";

const Features = () => {
  return (
    <Section className="bg-grey">
      <div className="container">
        <div className="mb-3 text-center font-medium">Features</div>
        <h2 className="mb-4 text-center">
          Design that solves <br className="max-md:hidden" /> problems, one
          product at <br className="max-md:hidden" /> a time
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-4 bg-white p-12 text-darkBlue shadow-sm"
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

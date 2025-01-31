import Section from "../Section";
import { process } from "../../constants";
import { line } from "../../assets";

const Process = () => {
  return (
    <Section>
      <div className="container">
        <h3 className="mb-12 text-center">The process we follow</h3>
        <div className="grid grid-cols-4 gap-x-8 gap-y-12 max-md:grid-cols-2">
          {process.map((step) => (
            <div key={step.id} className="">
              <img
                src={line}
                alt="-"
                className="mb-8"
                width={272}
                height={24}
              />
              <h6 className="mb-2">{step.title}</h6>
              <p>{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;

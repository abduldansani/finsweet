import Section from "../Section";
import { process } from "../../constants";
import { line } from "../../assets";

const Process = () => {
  return (
    <Section>
      <div className="container">
        <h3 className="text-center mb-12">The process we follow</h3>
        <div className="grid max-md:grid-cols-2 grid-cols-4 gap-8">
          {process.map((step, i) => (
            <div key={i} className="">
              <img src={line} alt="" className="mb-8" width={272} height={24} />
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

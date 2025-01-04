import React from "react";
import { fBenefits } from "../../constants";

const Benefits = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <h2 className="text-center">
          The benefits of working <br className="max-md:hidden" /> with our team
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-12">
          {fBenefits.map((benefit, i) => (
            <div key={i} className="p-12 space-y-3 bg-grey">
              <img src={benefit.icon} alt="-" width={32} height={32} />
              <h6>{benefit.title}</h6>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

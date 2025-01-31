import React from "react";
import { fBenefits } from "../../constants";

const Benefits = () => {
  return (
    <section className="pb-32">
      <div className="container">
        <h2 className="text-center">
          The benefits of working <br className="max-md:hidden" /> with our team
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {fBenefits.map((benefit) => (
            <div key={benefit.id} className="space-y-3 bg-grey p-12">
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

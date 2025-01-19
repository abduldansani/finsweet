import React from "react";
import Section from "../Section";
import { benefits, usersLogo } from "../../constants";
import Faq from "../Home/Faq";
import Users from "../Users";

const Benefits = () => {
  return (
    <Section>
      <div className="container space-y-5 md:space-y-8 xl:space-y-12">
        <h2 className="text-center">
          The benefits of working <br /> with us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="p-12 space-y-3 bg-grey">
              <img src={benefit.icon} alt="-" width={32} height={32} />
              <h6>{benefit.title}</h6>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-20 overflow-hidden">
          <Users />
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

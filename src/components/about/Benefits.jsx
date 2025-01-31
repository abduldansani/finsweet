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
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="space-y-3 bg-grey p-12">
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

import React from "react";
import Section from "../Section";
import { caseStudy1 } from "../../assets";
import { studySummary } from "../../constants";

const Overview = () => {
  return (
    <Section>
      <div className="container">
        <h6 className="bg-opacity-80 mb-3">Web design and development</h6>
        <h2 className="mb-2 md:mb-4">
          Finsweet Design case <br className="max-md:hidden" /> studies
        </h2>
        <p className="font-medium mb-12 lg:w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <img
          src={caseStudy1}
          alt=""
          width={1064}
          height={641}
          className="mb-12 w-full"
        />
        <div className="pb-8 border-b-2 border-b-darkBlue border-opacity-30 flex justify-between items-center flex-wrap gap-10">
          {studySummary.map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="font-medium text-opacity-80">{item.title}</div>
              <h6>{item.content}</h6>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Overview;

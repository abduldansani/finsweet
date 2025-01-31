import React from "react";
import { aboutTheProject, howWeDoIt } from "../../constants";
import { caseStudy2 } from "../../assets";

const Details = () => {
  return (
    <div className="container max-w-[840px]">
      <h3 className="mb-3">About the project</h3>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul className="space-y-4">
        {aboutTheProject.map((item, i) => (
          <li key={i} className="list-inside list-disc opacity-70">
            {item}
          </li>
        ))}
      </ul>
      <img
        src={caseStudy2}
        alt="-"
        width={840}
        height={508}
        className="py-10 lg:my-16"
      />
      <h3 className="mb-3">How we do it</h3>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ul className="space-y-2 lg:space-y-4">
        {howWeDoIt.map((item, i) => (
          <li key={i} className="list-inside list-disc opacity-70">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
